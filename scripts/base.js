// 创建Angular.js应用
angular.module('myApp', [])
    .controller('MainController', function ($scope) {
        
        $scope.data = [
            {
                name: 'anger',
                gender: 0
            },
            {
                name: 'favor',
                gender: 0
            },
            {
                name: 'alice',
                gender: 1
            }
        ];
        var LIST_MAP = [
            // insuranceType 1=医保 2=自费
            { name: 'alice', gender: 0, age: 28, insuranceType: 1, temperature: 36.8, symptoms: ['咳嗽', '发冷'] },
            { name: 'huber', gender: 1, age: 32, insuranceType: 2, temperature: 38, symptoms: ['咳嗽', '发热'] },
            { name: 'summer', gender: 0, age: 8, insuranceType: 1, temperature: 37.2, symptoms: ['咳嗽', '发冷'] }
        ]
        $scope.list = Array.from(LIST_MAP)
        $scope.searchText = ''

        $scope.goSearch = function (list) {
            return list.map(item => item.gender)
            // console.log($scope.searchText);
            // if(!$scope.searchText) {
            //     $scope.list = Array.from(LIST_MAP)
            // }
            // $scope.list = $scope.list.filter(item => item.name.includes($scope.searchText))
        }

        //  添加医嘱
        $scope.addMedicalOrder = function (patient) {
            if (!patient.orders) patient.orders = []

            let medicalList = [
                {
                    medical: '阿莫西林',
                    dosage: '0.5克',
                    frequency: '每日三次'
                },
                {
                    medical: '夫西地酸',
                    dosage: '10克',
                    frequency: '每日二次'
                },
                {
                    medical: '头孢',
                    dosage: '12克',
                    frequency: '每日一次/饭前'
                }
            ]
            patient.orders.push(medicalList[Math.floor(Math.random() * 2)])
        }

        $scope.setTemperature = function(patient) {
            patient.temperature = 38
        }

        $scope.addPatient = function() {
            console.log('添加病人');
            $scope.list = Array.from($scope.list).concat(
                 { name: 'bob', gender: 0, age: 28, insuranceType: 1, temperature: 36.8, symptoms: ['咳嗽', '发冷'] },
            )
            console.log($scope.list);
        }

        // 添加属性
        $scope.addAttribute = function() {
            $scope.list[0].address = '新疆'
            // if (!patient.address) patient.address = '新疆'
        }
        $scope.addAttribute()
    });