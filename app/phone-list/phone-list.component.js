'use strict';

angular
    .module('phonecatApp')
    .controller('phoneList', {
        // template: `
        //     <h1>Hello {{ name }}</h1>
        //     <ul>
        //         <li ng-repeat="phone in phones">
        //             <span>{{ phone.name }}</span>
        //             <p>{{ phone.snippet }}</p>
        //         </li>
        //     </ul>
        //     <p>Total number of phones: {{ phones.length }}</p>
        // `,
        template:
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>',
        controller: function PhoneListController() {
            this.phones = [
                {
                    name: 'Nexus S',
                    snippet: 'Fast just got faster with Nexus S.'
                }, {
                    name: 'Motorola XOOM™ with Wi-Fi',
                    snippet: 'The Next, Next Generation tablet.'
                }, {
                    name: 'MOTOROLA XOOM™',
                    snippet: 'The Next, Next Generation tablet.'
                }
            ],
            this.name = 'world'
        } 
    });
        




