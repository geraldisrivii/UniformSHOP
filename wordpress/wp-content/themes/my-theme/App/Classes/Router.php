<?php 

namespace App\Classes;

class Router{

    private static string $path = 'App\\Controllers\\';

    private static string $pathMiddleware = 'App\\Middlewares\\';

    private static string $namespace = 'wp/v2';

    public static function get(string $routeName, string $routeCallback, $midlleWare = null){
        return Router::addRoute($routeName, 'GET', $routeCallback, $midlleWare);
    }
    
    public static function post(string $routeName, string $routeCallback, $midlleWare = null){
        return Router::addRoute($routeName, 'POST', $routeCallback, $midlleWare);
    }

    public static function put(string $routeName, string $routeCallback, $midlleWare = null){
        return Router::addRoute($routeName, 'PUT', $routeCallback, $midlleWare);
    }

    public static function patch(string $routeName, string $routeCallback, $midlleWare = null){
        return Router::addRoute($routeName, 'PATCH', $routeCallback, $midlleWare);
    }
    
    public static function delete(string $routeName, string $routeCallback, $midlleWare = null){
        return Router::addRoute($routeName, 'DELETE', $routeCallback, $midlleWare);
    }

    private static function addRoute(string $routeName, string $routeMethod, string $routeCallback, $midlleWare = null){
        
        $controller = substr($routeCallback, 0, strpos($routeCallback, '@'));
        $method = substr($routeCallback, strpos($routeCallback, '@') + 1);
        
        $controllerPath = Router::$path . $controller;
        
        $instance = new $controllerPath();

        $permissionCallback = $midlleWare;
        $pathMiddleware = Router::$pathMiddleware . $midlleWare;
        if(class_exists($pathMiddleware)){
            $instanceMidlleWare = new $pathMiddleware();
            $permissionCallback = [$instanceMidlleWare, 'prepare'];
        }
        
        
        $namespace = Router::$namespace;
        $instancePath = $instance::class;

        $result = register_rest_route( $namespace, $routeName, [
            'methods' => $routeMethod,
            'callback' => [$instance, $method],
            'args' => [],
            'permission_callback' => $permissionCallback ?  $permissionCallback : function () {
                return true;
            }
        ] );

        return $result;
    }
} 