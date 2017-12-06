/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('eKinerja')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('API', 'http://10.2.1.32:8080/api/')
    .constant('API_REPORT', 'http://10.2.1.32:8080/api/report/');
    // .constant('API', 'http://192.168.1.184:8080/api/');

})();