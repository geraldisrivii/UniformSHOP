<template>
    <Transition @before-enter="(el) => el.style.zIndex = '999'" name="profile">
        <right-dialog v-if="isProfileShow" @update:isRightDialogShow="(newValue) => $emit('update:isProfileShow', newValue)"
            :isRightDialogShow="isProfileShow">
            <div class="profile">
                <div v-if="currentVisibleMenu.value == 'orders'" class="profile-orders">
                    <Order v-for="order in orders" :key="order.id" :status="order.status"
                        :date="order.date_created_gmt.slice(0, order.date_created_gmt.indexOf('T'))"
                        :items="order.line_items" :total="order.total" />
                </div>
                <div class="profile-settings" v-else-if="currentVisibleMenu.value == 'settings'">
                    <p class="profile-settings__title">Аккаунт с логином: <span>{{ $store.state.user.user.data.user_login
                    }}</span></p>
                    <button @click="signOut" class="profile-settings__button button button_around">Разлогинится</button>
                </div>
                <my-menu :isFiil="true" class="profile-menu" :buttons="buttonsInMenu"
                    v-model:currentValue="currentVisibleMenu" />
            </div>
        </right-dialog>
    </Transition>
</template>

<script>
import WOO from '@/axiosWoocomerce'
import WP from '@/axiosWP'
import Order from '@/components/Order.vue'
import { mapGetters } from 'vuex'
export default {
    props: {
        isProfileShow: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            buttonsInMenu: [
                { label: 'Заказы', value: 'orders' },
                { label: 'Настройки', value: 'settings' },
            ],
            currentVisibleMenu: { label: 'Заказы', value: 'orders' },
            isDataLoaded: false,
            orders: null,
        };
    },
    computed: {
        ...mapGetters({
            userIsntNull: 'user/userIsntNull'
        })
    },
    watch: {
        async userIsntNull() {
            if (this.userIsntNull) {
                this.getOrders()
            }
        },
    },
    async beforeCreate() {
        if (this.userIsntNull) {
            this.getOrders()
        }
    },
    methods: {
        async getOrders() {
            let orders = await WOO.get('orders?customer=' + this.$store.state.user.user.ID).then(response => response.data)

            console.log(orders)

            this.orders = orders

            this.isDataLoaded = true
        },
        async signOut() {
            let response = await WP.post('singout', {}, {
                withCredentials: true
            }).then(response => response.data)

            this.$emit('update:isProfileShow', false)

            if (response.status) {
                return this.$store.commit('user/setUser', null);
            }

        }
    },
    components: { Order },
}
</script>

<style lang="scss" scoped>
.profile-enter-active,
.profile-leave-active {
    transition: all 0.5s ease;
}

.profile-enter-from,
.profile-leave-to {
    transform: translateX(200px);
    // width: 0px;
    opacity: 0;
}

.profile {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: flex-start;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    gap: 40px;
}

.profile-orders {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.profile-menu {}

.profile-settings {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__title {
        color: #4D4D4D;
        text-align: center;
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
        text-transform: uppercase;

        span {
            color: #000;
            text-align: center;
            font-family: Montserrat;
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            text-transform: uppercase;
        }
    }

    &__button {}
}
</style>