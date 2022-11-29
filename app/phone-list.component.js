'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    template:
        `
        <h1>Hello {{ $ctrl.name }}</h1> 
        <ul> 
          <li ng-repeat="phone in $ctrl.phones"> 
            <span>{{phone.name}}</span> 
            <p>{{phone.snippet}}</p> 
          </li> 
        </ul>
        <p>Total number of phone: {{ $ctrl.phones.length }}</p>
        `,
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
      this.name = "world"
    }
  });