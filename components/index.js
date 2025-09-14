// angular.js 1.3 自定义的指令
angular.module('MyComps', [])
    .directive('userCard', function () {
        // 自定义用户信息卡片指令
        return {
            restrict: 'EA', //作为A或者E使用
            scope: {
                // 当前组件的作用域，是单独的
                // 定义给组件上添加的属性/方法
                user: '=' // 双向绑定父作用域的user属性
            },
            template: `
                <div class="user-card">
                    <h3>{{user.name}}</h3>
                    <p>年龄：{{user.age}}</p>
                    <p>性别：{{user.sex}}</p>
                </div>
            `,
            link: function(scope, element, attrs) {
                // element.css('background-color', '#96abce')
            }
        }
    })
    .directive('numberCounter', function () {
        return {
            restrict: 'E', // 只能作为元素使用
            scope: {
                start: '@',
                step: '@',
                max: '@',
                onUpdate: '&', // 方法：采用小驼峰
            },
            template: `
                <div class="counter">
                    <button ng-click="decrement()"> — </button>
                    <span>{{ currentValue }}</span>
                    <button ng-click="increment()"> + </button>
                </div>
            `,
            link: function (scope, element, attrs) {
                // 初始化值
                scope.currentValue = parseInt(scope.start) || 0
                var step = parseInt(scope.step) || 1
                var max = scope.max ? parseInt(scope.max) : Infinity;

                // 增加数值
                scope.increment = function () {
                    if (scope.currentValue + step <= max) {
                        scope.currentValue += step
                        scope.onUpdate({ newValue: scope.currentValue })
                    }
                }
                // 减少数值
                scope.decrement = function () {
                    if (scope.currentValue - step >= 0) {
                        scope.currentValue -= step
                        scope.onUpdate({ newValue: scope.currentValue })
                    }
                }
            }
        }
    })
    .controller('MainController', function ($scope) {
        // 用户信息
        $scope.userInfo = {
            name: 'anger',
            age: 18,
            sex: '男'
        }
        $scope.userInfo2 = {
            name: 'favor',
            age: 19,
            sex: '女'
        }

        // 计数器更新处理
        $scope.lastCounterValue = 0;
        $scope.counterUpdated = function (value) {
            console.log('你好呀');
            console.log(value, '=====');
            $scope.lastCounterValue = value;
        };

    })
