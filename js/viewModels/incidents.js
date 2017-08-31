/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['text!../viewModels/uk_epsg27700.json', 'proj4','ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojmodel', 'ojs/ojtable', 'ojs/ojcollectiontabledatasource','ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar','ojs/ojpictochart','ojs/ojgauge','ojs/ojthematicmap','ojs/ojpagingcontrol', 'ojs/ojpagingtabledatasource','ojs/ojdatagrid', 'ojs/ojcollectiondatagriddatasource', 'ojs/ojinputtext',
'ojs/ojinputnumber', 'ojs/ojdatetimepicker','ojs/ojvalidation-datetime','ojs/ojarraytabledatasource'],
 function(geo, proj4,oj, ko, $) {
  
    function IncidentsViewModel() {
        var self = this;
        self.dataReady = ko.observable(false);  
         self.currentSelection=ko.observable();
     self.DeptCol = ko.observable();
self.datasource = ko.observable();

self.serviceURL = 'https://apex.oracle.com/pls/apex/pierrealli/hr/employees/';
self.parseDept = function(response) {
    return {empno: response['empno'],
        ename: response['ename'],
        job: response['job'],
        hiredate: response['hiredate'],
        mgr: response['mgr'],
        sal: response['sal'],
        comm: response['comm'],
        deptno: response['deptno']};
};
self.Department = oj.Model.extend({
    urlRoot: self.serviceURL,
    parse: self.parseDept,
    idAttribute: 'empno'
});

self.myDept = new self.Department();
self.DeptCollection = oj.Collection.extend({
    url: self.serviceURL,
    model: self.myDept
});

self.DeptCol(new self.DeptCollection());
   $.getJSON("https://apex.oracle.com/pls/apex/pierrealli/hr/employees/",
            function (data) {
                         
                        self.datasource(new oj.CollectionTableDataSource(self.DeptCol()));
                          self.dataReady(true);  
                      }); 
                      
                    
                      
                      
                      
         /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var areaSeries = [{name : "Series 1", items : [74, 42, 70, 46]},
                          {name : "Series 2", items : [50, 58, 46, 54]},
                          {name : "Series 3", items : [34, 22, 30, 32]},
                          {name : "Series 4", items : [18,  6, 14, 22]}];
    
        var areaGroups = ["Group A", "Group B", "Group C", "Group D"];
   
        
        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);
        
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-area-vert'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-area-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-area-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-area-horiz'}
        ]; 
        
        
        
        
        
        
        
        
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        
        /* chart data */
        var barSeries = [{name: "Series 1", items: [42, 34]},
                         {name: "Series 2", items: [55, 30]},
                         {name: "Series 3", items: [36, 50]},
                         {name: "Series 4", items: [22, 46]},
                         {name: "Series 5", items: [22, 46]}];
    
        var barGroups = ["Group A", "Group B"];
   
        self.barSeriesValue = ko.observableArray(barSeries);
        self.barGroupsValue = ko.observableArray(barGroups);
        
        /* toggle buttons*/
        self.stackOptions = [
            {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
            {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
        ];
        self.orientationOptions = [
            {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
            {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
        ];
        
        
        
        
        self.threeDValue = ko.observable('off');

        /* chart data */
        var pieSeries = [{name: "Series 1", items: [42]},
                         {name: "Series 2", items: [55]},
                         {name: "Series 3", items: [36]},
                         {name: "Series 4", items: [10]},
                         {name: "Series 5", items: [5]}];
        
        this.pieSeriesValue = ko.observableArray(pieSeries);
        
        /* toggle buttons*/
        self.threeDOptions = [
            {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
            {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
        ];
        self.threeDValueChange = function(event, data) {
            self.threeDValue(data.value);
            return true;
        }
        
        self.pictoChartItems = ko.observableArray([
        {name: 'Have Sleep Problems', shape: 'human', count:7, color: '#ed6647'},
        {name: 'Sleep Well', shape: 'human', count: 3}
      ]);
      
      
      
              self.value10 = ko.observable(80);
              self.thresholdValues = [{max: 33}, {max: 67}, {}];
              var converterFactory = oj.Validation.converterFactory('number');
              var currencyConverter = converterFactory.createConverter({style: 'currency', currency: 'USD'});
              self.valueConverter = ko.observable(currencyConverter);
              self.gaugeOptionChange = function(e, data) {
                if (data.option == "value") {
                  $("#gauge").attr('title', "Value: " + Math.round(data['value']) + "<br>Reference Lines: Low 33, Medium 67, High 100");
                  $("#gauge").ojStatusMeterGauge('refresh');
                }
              }
              
              
              
              
              
               self.mapProvider = {
            geo: JSON.parse(geo),
            propertiesKeys: {
              id: 'id',
              shortLabel: 'sLabel',
              longLabel: 'lLabel'
            }
          };

          var storeLocations = [
            {'long':0.1278, 'lat':51.5074, 'city': 'London'},
            {'long':-1.257677, 'lat':51.752022, 'city': 'Oxford'},
            {'long':-0.460739, 'lat':52.136436, 'city': 'Bedford'},
            {'long':-7.318268, 'lat':55.006763, 'city': 'Londonderry'},
            {'long':-8.630498, 'lat':52.668018, 'city': 'Limerick'},
            {'long':-6.251495, 'lat':53.353584, 'city': 'Dublin'},
          ];

          self.cities = [];
          for (var i=0; i<storeLocations.length; i++) {
            var store = storeLocations[i];
            // Call proj4js API with the proj4 projection mapping for EPSG:2770 and the long/lat coordinates.
            var coords = proj4("+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs", [store.long, store.lat]);
            self.cities.push({id: store.city, x:coords[0], y:coords[1], shortDesc: store.city});
          }
      // Below are a subset of the ViewModel methods invoked by the ojModule binding
      // Please reference the ojModule jsDoc for additionaly available methods.

      /**
       * Optional ViewModel method invoked when this ViewModel is about to be
       * used for the View transition.  The application can put data fetch logic
       * here that can return a Promise which will delay the handleAttached function
       * call below until the Promise is resolved.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
       * the promise is resolved
       */
      self.handleActivated = function(info) {
        $('#datagrid').on('ojoptionchange', function(event, ui) {
            //on selection change update fields with the selected model
            if (ui['option'] === 'selection')
            {
                var selection = ui['value'][0];
                if (selection != null)
                {
                    var rowKey = selection['startKey']['row'];
                    vm.modelToUpdate = vm.collection.get(rowKey);
                    vm.updateFields(vm.modelToUpdate);
                }
            }
        });
        
      };

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
       */
      /*self.selectedItem = ko.pureComputed(function(ctx){
            if(self.currentSelection()){
                var value=self.currentSelection()[0]['empno'];
                return value;
            }else{
                return 'nothing';
            }
        });*/
        
        
        
        
       
     
        
        
        
        
        
        
    var deptArraya = [{DepartmentId: 10015, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300},
        {DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 55611, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 1011, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 2011, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 3011, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 4011, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 5011, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 6011, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 7011, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 8011, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 9011, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10011, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 11011, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 12011, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 13011, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300},
        {DepartmentId: 100111, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
        {DepartmentId: 55622, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
        {DepartmentId: 1022, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
        {DepartmentId: 2022, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 3022, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
        {DepartmentId: 4022, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
        {DepartmentId: 5022, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
        {DepartmentId: 6022, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
        {DepartmentId: 7022, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
        {DepartmentId: 8022, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300},
        {DepartmentId: 9022, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300},
        {DepartmentId: 10022, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300},
        {DepartmentId: 11022, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300},
        {DepartmentId: 12022, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300},
        {DepartmentId: 13022, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300}];
    self.pagingDatasource = new oj.PagingTableDataSource(new oj.ArrayTableDataSource(deptArraya, {idAttribute: 'DepartmentId'}));
    
    
    
    
    
    
    self.datas = ko.observableArray();
        $.getJSON("https://apex.oracle.com/pls/apex/pierrealli/hr/employees/").
                then(function (employees) {
                    $.each(employees, function () {
                         for (var i=0; i < employees.items.length; i++){
                        self.datas.push({
                            empno: employees.items[i].empno,
                            ename: employees.items[i].ename,
                            job: employees.items[i].job,
                            hiredate: employees.items[i].hiredate,
                            mgr: employees.items[i].mgr,
                            sal: employees.items[i].sal,
                            comm: employees.items[i].comm,
                            deptno: employees.items[i].deptno
                        });
                    }
                    });
                });
        self.datasourceup = new oj.ArrayTableDataSource(
                self.datas, 
                {idAttribute: 'empno'}
        );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
            var dateOptions = {formatType: 'date', dateFormat: 'medium'};
        var dateConverterFactory = 
                oj.Validation.converterFactory("datetime");
        this.dateConverter = 
                dateConverterFactory.createConverter(dateOptions);        
        
        var salaryOptions = {
            style: "currency",
            currency: "USD",
            currencyDisplay: "symbol"};
        var salaryConverterFactory = 
                oj.Validation.converterFactory("number");
        this.salaryConverter = 
                salaryConverterFactory.createConverter(salaryOptions);        
        
        this.collection = new oj.Collection(null, {
            model: new oj.Model.extend({idAttribute: 'EMPLOYEE_ID'}),
            url: 'js/viewModels/employeeData.json'
        });        
        
        this.dataSource = new oj.CollectionDataGridDataSource(
            this.collection, {
            rowHeader: 'EMPLOYEE_ID', 
            columns:['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY']
        });        

        var nextKey = 121;        
        
        //build a new model from the observables in the form
        this.buildModel = function()
        {
            return {
                'EMPLOYEE_ID': this.inputEmployeeID(),
                'FIRST_NAME': this.inputFirstName(),
                'LAST_NAME': this.inputLastName(),
                'HIRE_DATE': this.inputHireDate(),
                'SALARY': this.inputSalary()
            };
        };
        
        //used to update the fields based on the selected row
        this.updateFields = function(model)
        {      
            this.inputEmployeeID(model.get('EMPLOYEE_ID'));
            this.inputFirstName(model.get('FIRST_NAME'));
            this.inputLastName(model.get('LAST_NAME'));
            this.inputHireDate(model.get('HIRE_DATE'));
            this.inputSalary(model.get('SALARY'));
        };
        
        //add the model to the collection at index 0
        this.add = function()
        {
            if (this.inputEmployeeID(nextKey) < nextKey)
            {
                this.inputEmployeeID(nextKey);            
            }
            var model = this.buildModel();
            nextKey+=1;
            this.inputEmployeeID(nextKey);
            this.collection.add(model, {at:0});
        };

        // update the model in the collection
        this.update = function()
        {
            this.modelToUpdate.set(this.buildModel());
        };

        //remove the selected model from the collection
        this.remove = function()
        {
            this.collection.remove(this.modelToUpdate);
        };

        //reset the fields to their original values
        this.resetFields = function()
        {       
            this.inputEmployeeID(nextKey);
            this.inputFirstName('Jane');
            this.inputLastName('Doe');
            this.inputHireDate(
                    oj.IntlConverterUtils.dateToLocalIso(new Date()));
            this.inputSalary(15000);
        };  
        
        //intialize the observable values in the forms
        this.inputEmployeeID = ko.observable(nextKey);
        this.inputFirstName = ko.observable('Jane');
        this.inputLastName = ko.observable('Doe');
        this.inputHireDate = ko.observable(
                oj.IntlConverterUtils.dateToLocalIso(new Date()));
        this.inputSalary = ko.observable(15000);
        
    
      self.handleAttached = function(info) {
        $('#datagrid').on('ojoptionchange', function(event, ui) {
            //on selection change update fields with the selected model
            if (ui['option'] === 'selection')
            {
                var selection = ui['value'][0];
                if (selection != null)
                {
                    var rowKey = selection['startKey']['row'];
                    vm.modelToUpdate = vm.collection.get(rowKey);
                    vm.updateFields(vm.modelToUpdate);
                }
            }
        });
        
      };


      /**
       * Optional ViewModel method invoked after the bindings are applied on this View. 
       * If the current View is retrieved from cache, the bindings will not be re-applied
       * and this callback will not be invoked.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       */
      self.handleBindingsApplied = function(info) {
        $('#datagrid').on('ojoptionchange', function(event, ui) {
            //on selection change update fields with the selected model
            if (ui['option'] === 'selection')
            {
                var selection = ui['value'][0];
                if (selection != null)
                {
                    var rowKey = selection['startKey']['row'];
                    vm.modelToUpdate = vm.collection.get(rowKey);
                    vm.updateFields(vm.modelToUpdate);
                }
            }
        });
      };
      
     
      self.date = ko.observable();
      self.datetime = ko.observable();
      self.time = ko.observable();
      
      
      self.dateValue1 = ko.observable();
        self.dateValue2 = ko.observable();
        self.todayIsoDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
        self.milleniumStartIsoDate = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2000, 00, 01)));

      /*
       * Optional ViewModel method invoked after the View is removed from the
       * document DOM.
       * @param {Object} info - An object with the following key-value pairs:
       * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
       * @param {Function} info.valueAccessor - The binding's value accessor.
       * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
       */
      self.handleDetached = function(info) {
        // Implement if needed
      };
      
      
      self.changeHandler = function(event, data){
    	if(data.option === "currentRow" && data.value != undefined){
    		console.log('data: '+JSON.stringify(data.value));
        self.datasource.get(data.value.rowKey).then(function(row){
	        //debugger;
  	      console.log('Row: '+JSON.stringify(row.data));
        
        });
      }
      }
     
      
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new IncidentsViewModel();
    
    
    
    
    
  }
          
       
          
          
);
