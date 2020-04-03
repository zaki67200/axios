
window.addEventListener("DOMContentLoaded", function(event) {

  const apiList = document.getElementById('listing');


  axios.get('http://dummy.restapiexample.com/api/v1/employees').then(resp => {




                     var somme=0;

                    for(var i=0; i <resp.data.length; i++)
                    {

                      var p=new Employees(resp.data[i].id,  resp.data[i].employee_name,  resp.data[i].employee_salary, resp.data[i].employee_age );
                      var creer_email =p.creerEmail();
                      var caculerSalaire=p.caculerSalaire();
                      employees=parseFloat(p.caculerSalaire());

                      var caculerAnneeNaissance=p.caculerAnneeNaissance();
                      somme +=caculerSalaire;
                      var taille = employees.length;

                       apiList.innerHTML += '<tr><td>' + p.id_employee +'</td>'+
                                             '<td>' + p.name_employee +'</td>'+
                                             '<td>' + creer_email +'</td>'+
                                             '<td> ' + caculerSalaire.toFixed(2)+'</td>'+
                                             '<td>' +caculerAnneeNaissance+'</td></tr>';

                      }


                        apiList.innerHTML += '<tr><td>' +taille +'</td>'+
                                '<td></td>'+
                                '<td></td>'+
                                '<td>' +somme+'</td>'+
                                '<td></td></tr>';


                           
                     });                       


});