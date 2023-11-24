<?php

namespace App\Classes;

class Validator{
    protected array $validationValues = [];
    protected array $validationRules = [];
    protected array $validatedValues = [];
    public function __construct(array $validationValues){
        $this->validationValues = $validationValues;
    }
    public function add_rules(array $validationRules){
        $this->validationRules = $validationRules;
    }
    public function run(){
        foreach ($this->validationRules as $key => $rule) {
            if(!isset($this->validationValues[$key])){
                continue;
            }
            if(preg_match($rule, $this->validationValues[$key])){
                $this->validatedValues[$key] = $this->validationValues[$key];
                unset($this->validationValues[$key]);
            }
        }
        return $this->validatedValues;
    }

    public function is_valid_all(){
        return count($this->validatedValues) == count($this->validationRules);
    }

    public function is_valid($key){
        return $this->validationValues[$key] != null ? false : true;
    }
}