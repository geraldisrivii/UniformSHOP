class Validator {

    #types = {
        min: (str, minCount) => str.length >= Number(minCount),
        max: (str, maxCount) => str.length <= Number(maxCount),
    }

    #rules = [];

    #validFields = {};

    #isntValidFields = {};

    constructor() {
    }

    setRules(rules) {
        if (typeof rules != 'object') {
            return false;
        }
        this.#rules = rules;
    }


    async run(fields) {
        if (typeof fields != 'object') {
            return false;
        }
        for (const key in fields) {

            let ruleForField = this.#rules.find(rule => rule.name == key);

            if (!ruleForField) {
                continue;
            }

            let fieldIsVerified = false;

            for (const rule of ruleForField.rules) {
                // Декомпозиция обьекта
                let message = rule.message;

                if (rule.type) {
                    let result = false;
                    if (rule.type == 'custom') {
                        result = await rule.callback(fields[key], ...rule.params)
                    } else {
                        result = await this.#types[rule.type](fields[key], rule.value)
                    }

                    if (result == false) {
                        fieldIsVerified = false;
                        this.#isntValidFields[key] = message
                        break;
                    }

                    fieldIsVerified = true
                    continue;
                }
                // Декомпозиция обьекта
                let regexp = rule.regexp;
                // Выделение отрицания из регулярного выражения
                let isNegative = regexp.startsWith("!");
                // приведение регулярного выражения к правильному виду
                let pattern = regexp.slice(isNegative ? 2 : 1, regexp.lastIndexOf('/'));

                let flags = regexp.slice(regexp.lastIndexOf('/') + 1)

                regexp = new RegExp(pattern, flags)

                // проверка и применение отрицания если оно обозначено
                let result = isNegative ? !(regexp.test(fields[key])) : regexp.test(fields[key])

                // Если результат соответсвует то нужно проверить иные правила
                if (result) {
                    fieldIsVerified = true;
                    continue
                }

                // Возвращаю данные о несоответсвиях и сообщения для UI

                fieldIsVerified = false;
                let returnedResult = {};

                returnedResult[key] = message
                this.#isntValidFields[key] = message
                break;
            }

            if (fieldIsVerified) {
                let returnedResult = {};

                returnedResult[key] = fields[key]

                this.#validFields[key] = fields[key]
            }

        }

        return this.#validFields;
    }

    getIsntValidFields() {
        return this.#isntValidFields;
    }

    isAllFieldsValid() {
        let hasOneElement = false
        for (const key in this.#isntValidFields) {
            hasOneElement = true
        }
        return !hasOneElement
    }
}

export default Validator;