  function App(client) {
    this.client = client;
    this.patient;
    this.observations;
  }
  
  App.prototype.fetchCurrentPatient = function() {
    this.client.patient.read().then((data)=>{
      this.patient = data;
      renderPatient(this.patient);
      console.log(this.patient);
    });
  };


  App.prototype.fetchCurrentObservations = function() {
   /*  var render = createRenderer("encounter");
    render("Loading...");
    return this.client.encounter.read().then(render, render); */
  };
/* 
  
  App.prototype.fetchCurrentUser = function() {
    var render = createRenderer("user");
    render("Loading...");
    return this.client.user.read().then(render, render);
  }; */
  
  App.prototype.request = function(requestOptions, fhirOptions) {
    this.client.request(requestOptions, fhirOptions).then((data)=>{
      console.log(data);
  });
  };
  
  App.prototype.renderContext = function() {
    return Promise.all([
      this.fetchCurrentPatient(),
      //this.fetchCurrentUser(),
      //this.fetchCurrentEncounter()
    ]);
  };
  

  function renderPatient(patient){
    const patientHTML = `<div class="w-100 d-flex flex-column p-5">
              <h4>Name: ${patient.name}</h4>
              <h4>Gender: ${patient.gender}</h4>
              <h4>${patient.birthDate}</h4>
            </div>`;

    document.getElementById("patient").innerHTML = patientHTML;
  }
 