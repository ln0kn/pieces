/*=========================================================================================
  File Name: actions.js
  Description: Vuex Store - actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import axios from '../axios.js'
import router from '../router.js'
//Vue.prototype.$http = axios


const actions = {

    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu
    updateVerticalNavMenuWidth({
        commit
    }, width) {
        commit('UPDATE_VERTICAL_NAV_MENU_WIDTH', width)
    },

    // VxAutoSuggest
    updateStarredPage({
        commit
    }, payload) {
        commit('UPDATE_STARRED_PAGE', payload)
    },

    // The Navbar
    arrangeStarredPagesLimited({
        commit
    }, list) {
        commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({
        commit
    }, list) {
        commit('ARRANGE_STARRED_PAGES_MORE', list)
    },

    // /////////////////////////////////////////////
    // UI
    // /////////////////////////////////////////////

    toggleContentOverlay({
        commit
    }) {
        commit('TOGGLE_CONTENT_OVERLAY')
    },
    updateTheme({
        commit
    }, val) {
        commit('UPDATE_THEME', val)
    },

    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    updateUserInfo({
        commit
    }, payload) {
        commit('UPDATE_USER_INFO', payload)
    },


    // /////////////////////////////////////////////
    // Article
    // /////////////////////////////////////////////
//
//    checkout({commit}) {
//      let { data } = this.$http.post('http://yourwebsite.com/api/todo')
////      context.commit('SET_TODO',data)
//   },

//     getData(context) {
//
//    axios.get("/addArticle")
//            .then((response) => { this.ordersRecevied = response.data })
//            .catch((error) => { console.log(error) })
//
//
//
//     },
//    
//    async addArticle(context, obj) {
//        await axios.post('/addArticle',obj).then((response) => {
//                context.commit('CREATE_SUCCESS', [response.data,'liste']);        
//            }).catch((error) => {
//                console.log(error);
//            })
//          
//     },
//    
//     async editArticle(context, obj) {
//        await axios.put('/editArticle',obj).then((response) => {
//                context.commit('CREATE_SUCCESS', [response.data,'liste']);        
//            }).catch((error) => {
//                console.log(error);
//            })
//          
//     },
//    
//    getArticle(context) {
//        axios.get('/getArticle').then((response) => {
//                context.commit('SET_ARTICLE_LIST',response.data);
//            }).catch((error) => {
//                console.log(error);
//            })
//     }
    
    
    
    // /////////////////////////////////////////////
    // EMBALLGE
    // /////////////////////////////////////////////
    getEmballage(context) {
        axios.get('/getEmballage').then((response) => {
                context.commit('SET_EMBALLAGE_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
     },
    
    async addEmballage(context, obj) {
        await axios.post('/addEmballage',obj).then((response) => {
            context.commit('CREATE_EMBALLAGE_SUCCESS', response.data);        
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    async editEmballage(context, obj) {
        await axios.put('/editEmballage',obj).then((response) => {
            context.commit('EDIT_EMBALLAGE_SUCCESS', response.data);      
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    deleteEmballage(context, obj){
         axios({
                  method: 'delete',
                  url: '/deleteEmballage',
                  data: obj
                })
            .then((response) => {
            context.commit('DELETE_EMBALLAGE_SUCCESS', response.data);    
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    
    // /////////////////////////////////////////////
    // ARTICLE
    // /////////////////////////////////////////////

    getTypArt(context) {
        axios.get('/getTypArt').then((response) => {
                context.commit('SET_TYP_ART_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },

    async addArticle(context, obj) {
        await axios.post('/addArticle',obj).then((response) => {
            context.commit('CREATE_ARTICLE_SUCCESS', response.data);   
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    async editArticle(context, obj) {
        await axios.put('/editArticle',obj).then((response) => {
            context.commit('EDIT_ARTICLE_SUCCESS', response.data);  
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    getArticle(context) {
        axios.get('/getArticle').then((response) => {
                context.commit('SET_ARTICLE_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
     },
    
    deleteArticle(context, obj){
         axios({
                  method: 'delete',
                  url: '/deleteArticle',
                  data: obj
                })
            .then((response) => {
            context.commit('DELETE_ARTICLE_SUCCESS', response.data);      
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },  
    
    // /////////////////////////////////////////////
    // VENTE
    // /////////////////////////////////////////////
    async addVente(context, obj) {
//        await axios.post('/addVente',obj).then((response) => {
//            context.dispatch('getStock')
//            context.commit('CREATE_VENTE_SUCCESS', response.data);        
//        }).catch((error) => {
//            console.log(error);
//        })
        
     await axios({
                    url: '/addVente',
                    method: 'POST',
                    data: obj,
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.pdf');
                    document.body.appendChild(link);
                    link.click();
                });
        
    },
    
    editVente(context, obj) {
        axios.put('/editVente',obj)
            .then((response) => {
            context.commit('EDIT_VENTE_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },
    
    getVente(context) {
        axios.get('/getVente').then((response) => {
                context.commit('SET_VENTE_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    deleteVente(context, obj){
         axios({
                  method: 'delete',
                  url: '/deleteVente',
                  data: obj
                })
            .then((response) => {
            context.commit('DELETE_VENTE_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },   
    
    // /////////////////////////////////////////////
    // COMMANDE
    // /////////////////////////////////////////////
    async addCommande(context, obj) {
        await axios.post('/addCommande',obj).then((response) => {
            context.commit('CREATE_COMMANDE_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },
    
    async commandeVente(context, obj) {
//        await axios.post('/commandeVente',obj).then((response) => {
//            context.commit('CREATE_COMMANDE_SUCCESS', response.data);        
//        }).catch((error) => {
//            console.log(error);
//        })
        
        
     await axios({
        url: '/commandeVente',
        method: 'POST',
        data: obj,
        responseType: 'blob',
    }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
         this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    });
    },
    
    editCommande(context, obj) {
        axios.put('/editCommande',obj)
            .then((response) => {
            context.commit('EDIT_COMMANDE_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },
    
    getCommande(context) {
        axios.get('/getCommande').then((response) => {
                context.commit('SET_COMMANDE_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    deleteCommande(context, obj){
         axios({
                  method: 'delete',
                  url: '/deleteCommande',
                  data: obj
                })
            .then((response) => {
            context.commit('DELETE_COMMANDE_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },
    
    // /////////////////////////////////////////////
    // CLIENT
    // /////////////////////////////////////////////
    getClient(context) {
        axios.get('/getClient').then((response) => {
                context.commit('SET_CLIENT_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    
    // /////////////////////////////////////////////
    // VERSEMENT
    // /////////////////////////////////////////////
    getVersement(context) {
        axios.get('/getVersement').then((response) => {
                context.commit('SET_VERSEMENT_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    async addVersement(context, obj) {
        await axios.post('/addVersement',obj).then((response) => {
            context.commit('CREATE_VERSEMENT_SUCCESS', response.data); 
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    editVersement(context, obj) {
        axios.put('/editVersement',obj)
            .then((response) => {
            context.commit('EDIT_VERSEMENT_SUCCESS', response.data);   
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    deleteVersement(context, obj){
         axios({
                  method: 'delete',
                  url: '/deleteVersement',
                  data: obj
                })
            .then((response) => {
            context.commit('DELETE_VERSEMENT_SUCCESS', response.data);     
             context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },
    
    // /////////////////////////////////////////////
    // STOCK
    // /////////////////////////////////////////////
    getStock(context) {
//        alert("st")
        axios.get('/getStock').then((response) => {
                context.commit('SET_STOCK_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    gotStock(context) {
        axios.get('/gotStock').then((response) => {
                context.commit('SET_STOCK_STATE',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    // /////////////////////////////////////////////
    // Ajustement
    // /////////////////////////////////////////////
    getAjustement(context) {
//        alert()
        axios.get('/getAjustement').then((response) => {
                context.commit('SET_AJUSTEMENT_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },
    
    async addAjustement(context, obj) {
        await axios.post('/addAjustement',obj).then((response) => {
            context.commit('CREATE_AJUSTEMENT_SUCCESS', response.data);        
        }).catch((error) => {
            console.log(error);
        })
    },
    
    venteFacture (context,obj){
        axios({
                    url: '/venteFacture?id='+obj ,
                    method: 'GET',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.pdf');
                    document.body.appendChild(link);
                    link.click();
                });
    },
    
    /////////////////////////////////////////////
    ////////////////////liste inventaire
    async listeInventaire (context,obj){
       await axios({
                    url: '/listeInventaire',
                    method: 'POST',
                    responseType: 'blob',
                }).then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'file.pdf');
                    document.body.appendChild(link);
                    link.click();
                });
    },

    // /////////////////////////////////////////////
    // approvisionnement
    // /////////////////////////////////////////////
    deleteApprovisionnement(context, obj){
        //console.log(obj),
         axios({
             method:'delete', url:'/deleteApprovisionnement', data:obj
            })
            .then((response) => { 
             context.commit('DELETE_APPR_SUCCESS', response.data);
             context.commit('CLEAR_INPUT', [response.data,obj]);
         }).catch((error) => {

         })
    },

    async editApprovisionnement(context, obj) {
        await axios.put('/editApprovisionnement',{data:obj}).then((response) => {
            context.commit('EDIT_APPROV_SUCCESS',response.data); 
//            alert()
            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            console.log(error);
        })
    },

    async addApprovisionnement(context, obj) {
        await axios.post('/addApprovisionnement',{data:obj}).then((response) => {
            context.commit('CREATE_APPROV_SUCCESS', response.data);   

            context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {
            //  console.log(error);
          })
    },

    getMagasin(context) { 
        axios.get('/getMagasin',{'Content-Type' : 'application/json','Accept' : 'application/json','Authorization' : 'Bearer'}).then((response) => {
                context.commit('SET_MAGASIN_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },
//
//    
//    getAppMag(context) { 
//        axios.get('/getAppMag').then((response) => {
//                context.commit('SET_APP_MAG_LIST',response.data);
//            }).catch((error) => {
//                console.log(error);
//            })
//    },

    getApprovisionnement(context) { 
        axios.get('/getApprovisionnement').then((response) => {
                context.commit('SET_APP_ART_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },

    
    // /////////////////////////////////////////////
    // Casse
    // /////////////////////////////////////////////
    deleteCasse(context, obj){
        //console.log(obj),
         axios({
             method:'delete', url:'/deleteCasse', data:obj
            })
            .then((response) => { 
             context.commit('DELETE_CASSE_SUCCESS', response.data);
         }).catch((error) => {

         })
    },

    async addCasse(context, obj) {
        await axios.post('/addCasse',{data:obj}).then((response) => {
            context.commit('CREATE_CASSE_SUCCESS', response.data,);
            
                 
        }).catch((error) => {
            //  console.log(error);
          })
    },

     stopFormloading(context) { 
        axios.get('').then((response) => {
                context.commit('STOP_LOADING',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },

    
    async editCasse(context, obj) {
        await axios.put('/editCasse',{data:obj}).then((response) => {
            context.commit('EDIT_CASSE_SUCCESS',response.data);       
        }).catch((error) => {
            console.log(error);
        })
    },

    getCasse(context) { 
        axios.get('/getCasse').then((response) => {
                context.commit('SET_CASSE_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },
    
    // /////////////////////////////////////////////
    // Depense
    // /////////////////////////////////////////////
    
    deleteDepense(context, obj){
       // console.log(obj),
         axios({
             method:'delete', url:'/deleteDepense', data:obj
            })
            .then((response) => { 
             context.commit('DELETE_DEPENSE_SUCCESS', response.data);
             context.commit('CLEAR_INPUT', [response.data,obj]);
         }).catch((error) => {

         })
    },

    async addDepense(context, obj) {
         axios.post('/addDepense',{data :obj}).then((response) => {
                context.commit('CREATE_DEPENSE_SUCCESS', response.data,);
                context.commit('CLEAR_INPUT', [response.data,obj]);
            }).catch((error) => {
              //  console.log(error);
            })
        
    },
    
    getDepense(context) { 
        axios.get('/getDepense').then((response) => {
                context.commit('SET_DEPENSE_LIST',response.data);
            }).catch((error) => {
                console.log(error);
            })
    },

    async editDepense(context, obj) {
        await axios.put('/editDepense',obj).then((response) => {
                context.commit('EDIT_DEPENSE_SUCCESS',response.data); 
                context.commit('CLEAR_INPUT', [response.data,obj]);
            }).catch((error) => {
                console.log(error);
            })
            
    },


    getMagasin(context) { 
        axios.get('/getMagasin').then((response) => {
                context.commit('SET_MAGASIN_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },

    getAppMag(context) { 
        axios.get('/getAppMag').then((response) => {
                context.commit('SET_APP_MAG_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },

    getApprovisionnement(context) { 
        axios.get('/getApprovisionnement').then((response) => {
                context.commit('SET_APP_ART_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
    },

    // /////////////////////////////////////////////
    // Transfert
    // /////////////////////////////////////////////
    
    deleteTransfert(context, obj){
       // console.log(obj),
         axios({
             method:'delete', url:'/deleteTransfert', data:obj
            })
            .then((response) => { 
             context.commit('DELETE_TRANSFERT_SUCCESS', response.data);
         }).catch((error) => {

         })
    },

    async addTransfert(context, obj) {
         axios.post('/addTransfert',{data :obj}).then((response) => {
                context.commit('CREATE_TRANSFERT_SUCCESS', response.data,);
             //obj.libelle="";
            //   console.log(obj)     
            }).catch((error) => {
              //  console.log(error);
            })
        
    },
    getTransfert(context) { 
        axios.get('/getTransfert').then((response) => {
                context.commit('SET_TRANSFERT_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
        },

    getMagasin(context) { 
        axios.get('/getMagasin').then((response) => {
                context.commit('SET_MAGASIN_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
        },
    getAppMag(context) { 
        axios.get('/getAppMag').then((response) => {
                context.commit('SET_APP_MAG_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
        },

  
    async editTransfert(context, obj) {
        await axios.put('/editTransfert',{data:obj}).then((response) => {
            context.commit('EDIT_TRANSFERT_SUCCESS',response.data); 
            //obj.libelle="";obj.id="";       
        }).catch((error) => {
            console.log(error);
        })
            
    },


    async addMagasin(context, obj) {
        await axios.post('/addMagasin',obj).then((response) => {
                context.commit('CREATE_MAGASIN_SUCCESS', response.data);
                context.commit('CLEAR_INPUT', [response.data,obj]);
            }).catch((error) => {
              //  console.log(error);
            })
        
    },
    
    async editMagasin(context, obj) {
        await axios.put('/editMagasin',obj).then((response) => {
                context.commit('EDIT_MAGASIN_SUCCESS',response.data); 
                context.commit('CLEAR_INPUT', [response.data,obj]);
            }).catch((error) => {
                console.log(error);
            })
            
        },
    async deleteMagasin(context, obj){
        await  axios({
                method:'delete',url:'/deleteMagasin',data:obj 
            })
            .then((response) => {
                context.commit('DELETE_MAGASIN_SUCCESS', response.data);
                context.commit('CLEAR_INPUT', [response.data,obj]);
            }).catch((error) => {

            })
    },
    
    async deleteClient(context, obj){
       
    await  axios({
            method:'delete',url:'/deleteClient',data:obj 
        })
        .then((response) => {
            context.commit('DELETE_CLIENT_SUCCESS', response.data);
        context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {

        })
},

    async addClient(context, obj) {
        await axios.post('/addClient',obj).then((response) => {
                context.commit('CREATE_CLIENT_SUCCESS', response.data,);
                context.commit('CLEAR_INPUT', [response.data,obj]);
                    
            }).catch((error) => {
              //  console.log(error);
            })
        
    },
    
    getClient(context) { 
        axios.get('/getClient').then((response) => {
                context.commit('SET_CLIENT_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
        },

    async editClient(context, obj) {
        await axios.put('/editClient',obj).then((response) => {
                context.commit('EDIT_CLIENT_SUCCESS',response.data); 
                context.commit('CLEAR_INPUT', [response.data,obj]); 
            }).catch((error) => {
                console.log(error);
            })
            
        },
    
    
     createUser(context, obj) {
         axios.post('/api/auth/user', obj, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(
            (response) =>
             context.commit('ADD_USER_SUCCESS',response.data)
        ).catch(
            (error) => console.log(error))
            
        },

     updateUser(context, obj) {
         axios.put('/api/auth/updateUser', obj, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(
            (response) => {
             context.commit('EDIT_USER_SUCCESS',response.data)
            }).catch(
            (error) => console.log(error))
            
        },


     deleteUser(context, obj) {
//         axios.delete('/api/auth/deleteUser', obj, {
//            headers: {
//                'X-Requested-With': 'XMLHttpRequest'
//            }
//        })
//        .then(
//            (response) => {
//             context.commit('EDIT_USER_SUCCESS',response.data)
//            }).catch(
//            (error) => console.log(error))
//         
           axios({
            method:'delete',url:'/api/auth/deleteUser',data:obj 
        })
        .then((response) => {
            context.commit('DELETE_USER_SUCCESS', response.data);
//        context.commit('CLEAR_INPUT', [response.data,obj]);
        }).catch((error) => {

        })
            
        },


        
    
     loginUser(context, obj) {
         axios.post('/api/auth/login', obj, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(
            (response) => {
                const token       = response.data.access_token;
                localStorage.setItem('token',token);
                localStorage.setItem('userData',response.data.userData.name);
                router.push(router.currentRoute.query.to  || '/')
            }
        ).catch(
            (error) => console.log(error))
            
        },
    
     logoutUser(context, obj) {
         axios.post('/api/auth/logout', {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(
            (response) => {
                localStorage.removeItem('token');
                localStorage.removeItem('userData');
                router.push('/login')
            }
        ).catch(
            (error) => console.log(error))
            
        },

    accMsg(state,list){
          this._vm.$vs.notify({
             title:" Accès Refusé !",
             text: list,
             color:'warning',
             time:5000,
             i:'top-right',
             icon:'query_builder'
           })
         },
    
    
    getUser(context) { 
        axios.get('/api/auth/getUser').then((response) => {
                context.commit('SET_USER_LIST',response.data);
                //console.log(response.data)
            }).catch((error) => {
                console.log(error);
            })
        },












}

export default actions
