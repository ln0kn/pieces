/*=========================================================================================
  File Name: mutations.js
  Description: Vuex Store - mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


const mutations = {
    // /////////////////////////////////////////////
    // COMPONENTS
    // /////////////////////////////////////////////

    // Vertical NavMenu

    TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE(state, value) {
        state.isVerticalNavMenuActive = value
    },
    TOGGLE_REDUCE_BUTTON(state, val) {
        state.reduceButton = val
    },
    UPDATE_MAIN_LAYOUT_TYPE(state, val) {
        state.mainLayoutType = val
    },
    UPDATE_VERTICAL_NAV_MENU_ITEMS_MIN(state, val) {
        state.verticalNavMenuItemsMin = val
    },
    UPDATE_VERTICAL_NAV_MENU_WIDTH(state, width) {
        state.verticalNavMenuWidth = width
    },


    // VxAutoSuggest

    UPDATE_STARRED_PAGE(state, payload) {

        // find item index in search list state
        const index = state.navbarSearchAndPinList["pages"].data.findIndex((item) => item.url == payload.url)

        // update the main list
        state.navbarSearchAndPinList["pages"].data[index].is_bookmarked = payload.val

        // if val is true add it to starred else remove
        if (payload.val) {
            state.starredPages.push(state.navbarSearchAndPinList["pages"].data[index])
        } else {
            // find item index from starred pages
            const index = state.starredPages.findIndex((item) => item.url == payload.url)

            // remove item using index
            state.starredPages.splice(index, 1)
        }
    },

    // Navbar-Vertical

    ARRANGE_STARRED_PAGES_LIMITED(state, list) {
        const starredPagesMore = state.starredPages.slice(10)
        state.starredPages = list.concat(starredPagesMore)
    },
    ARRANGE_STARRED_PAGES_MORE(state, list) {
        let downToUp = false
        let lastItemInStarredLimited = state.starredPages[10]
        const starredPagesLimited = state.starredPages.slice(0, 10)
        state.starredPages = starredPagesLimited.concat(list)

        state.starredPages.slice(0, 10).map((i) => {
            if (list.indexOf(i) > -1) downToUp = true
        })

        if (!downToUp) {
            state.starredPages.splice(10, 0, lastItemInStarredLimited)
        }
    },
    
    
    /////////////////side bar
    SIDEBAR_STATE(state, list){
        
        state.sideBarState = list
//        alert(state.sideBarState)
    },



    // ////////////////////////////////////////////
    // UI
    // ////////////////////////////////////////////

    TOGGLE_CONTENT_OVERLAY(state, val) {
        state.bodyOverlay = val
    },
    UPDATE_PRIMARY_COLOR(state, val) {
        state.themePrimaryColor = val
    },
    UPDATE_THEME(state, val) {
        state.theme = val
    },
    UPDATE_WINDOW_WIDTH(state, width) {
        state.windowWidth = width
    },
    UPDATE_WINDOW_SCROLL_Y(state, val) {
        state.scrollY = val
    },


    // /////////////////////////////////////////////
    // User/Account
    // /////////////////////////////////////////////

    // Updates user info in state and localstorage
    UPDATE_USER_INFO(state, payload) {

        // Get Data localStorage
        let userInfo = JSON.parse(localStorage.getItem("userInfo")) || state.AppActiveUser

        for (const property of Object.keys(payload)) {

            if (payload[property] != null) {
                // If some of user property is null - user default property defined in state.AppActiveUser
                state.AppActiveUser[property] = payload[property]

                // Update key in localStorage
                userInfo[property] = payload[property]
            }


        }
        // Store data in localStorage
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
    },

    // /////////////////////////////////////////////
    // eMBALLAGE
    // /////////////////////////////////////////////
    
    CREATE_EMBALLAGE_SUCCESS(state, payload){
        console.log(payload)
        if (payload.fail) {
            console.log(payload.errors)
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            console.log(payload)
            state.listeEmballage.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
        

    },
    
    EDIT_EMBALLAGE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeEmballage){
                if(state.listeEmballage[item]['id'] == payload.id){
                  state.listeEmballage.splice(item,1,payload);
                }       
            }
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    DELETE_EMBALLAGE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeEmballage){
                if(state.listeEmballage[item]['id'] == payload.id){
                   state.listeEmballage.splice(item,1); 
                }  
            }
            this._vm.$vs.notify({
                title:'succès' ,
                text: 'Opération réussie',
                color: 'success',
                time:5000,
                position:'top-right',
                icon:'query_builder'
            })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },

    SET_EMBALLAGE_LIST(state, list){
        console.log(list)
        state.listeEmballage = list
    },
    
    
    // /////////////////////////////////////////////
    // ARTICLE
    // /////////////////////////////////////////////

    SET_TYP_ART_LIST(state, list){
        // console.log(list)
        state.listeTypArt = list
       // console.log(state.listeTypArt)
    },
    
    CREATE_ARTICLE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            state.listeArticle.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    EDIT_ARTICLE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeArticle){
                if(state.listeArticle[item]['id'] == payload.id){
                   state.listeArticle.splice(item,1); 
                }       
            }
            state.listeArticle.push(payload);
//            state.listeArticle.push(payload)
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
        

    },
    
    DELETE_ARTICLE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            
            for(const item in state.listeArticle){
                if(state.listeArticle[item]['id'] == payload.id){
                   state.listeArticle.splice(item,1); 
                }
                    
            }
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    SET_ARTICLE_LIST(state, list){
        state.listeArticle = list
    },
    
    
    
    // /////////////////////////////////////////////
    // COMMANDE
    // /////////////////////////////////////////////
    
    CREATE_COMMANDE_SUCCESS(state, payload){
//        alert()
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            state.listeCommande.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    SET_COMMANDE_LIST(state, list){
        state.listeCommande = list
    },
    
    EDIT_COMMANDE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeCommande){
                if(state.listeCommande[item]['id'] == payload.id){
                   state.listeCommande.splice(item,1); 
                }       
            }
            state.listeCommande.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
        

    },
    
    DELETE_COMMANDE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            
            for(const item in state.listeCommande){
                if(state.listeCommande[item]['id'] == payload.id){
                   state.listeCommande.splice(item,1); 
                }
                    
            }
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    
    
    // /////////////////////////////////////////////
    // VENTE
    // /////////////////////////////////////////////
    
    CREATE_VENTE_SUCCESS(state, payload){
//        alert()
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            state.listeVente.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    SET_VENTE_LIST(state, list){
        state.listeVente = list
    },
    
    EDIT_VENTE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeVente){
                if(state.listeVente[item]['id'] == payload.id){
                   state.listeVente.splice(item,1); 
                }       
            }
            state.listeVente.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
        

    },
    
    DELETE_VENTE_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            
            for(const item in state.listeVente){
                if(state.listeVente[item]['id'] == payload.id){
                   state.listeVente.splice(item,1); 
                }
                    
            }
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    
    
    
    // /////////////////////////////////////////////
    // CLIENT
    // /////////////////////////////////////////////
    
    SET_CLIENT_LIST(state, list){
        state.listeClient = list
    },

    
    // /////////////////////////////////////////////
    // STOCK
    // /////////////////////////////////////////////
    
    SET_STOCK_LIST(state, list){
        state.listeStock = list[0]
        state.mtnVte = list[1]
        state.mtnVersee = list[2]
    },

    
    SET_STOCK_STATE(state, list){
        state.etatStock = list
    },

    
    
    // /////////////////////////////////////////////
    // AJUSTEMENT
    // /////////////////////////////////////////////
    CREATE_AJUSTEMENT_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            state.listeAjustement.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    SET_AJUSTEMENT_LIST(state, list){
        state.listeAjustement = list
    },
    
    // /////////////////////////////////////////////
    // VERSEMENT
    // /////////////////////////////////////////////
    SET_VERSEMENT_LIST(state, list){
        state.listeVersement = list
    },
    
    CREATE_VERSEMENT_SUCCESS(state, payload){
        console.log(payload)
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            state.listeVersement.unshift(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })

        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    EDIT_VERSEMENT_SUCCESS(state, payload){
        
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            for(const item in state.listeVersement){
//                console.log(state.listeVersement[item]['compte']['id'])
//                console.log(payload)
                if(state.listeVersement[item]['compte']['id'] == payload.compte.id){
                    state.listeVersement.splice(item,1,payload); 
//                    console.log(state.listeVersement)
                    
                }       
            }
            state.listeVersement.push(payload);
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
        
    },
    
    DELETE_VERSEMENT_SUCCESS(state, payload){
        if (payload.fail) {
            for (const item in payload.errors)
                for (const k in payload.errors[item])
                    this._vm.$vs.notify({
                        title: 'Attention',
                        text: payload.errors[item][k],
                        color: 'warning',
                        time:5000,
                        position:'top-right',
                        icon:'query_builder'
                    })
        }
        else {
            
            for(const item in state.listeVersement){
                if(state.listeVersement[item]['id'] == payload[0].id){
                   state.listeVersement.splice(item,1); 
                }
                    
            }
                this._vm.$vs.notify({
                    title:'succès' ,
                    text: 'Opération réussie',
                    color: 'success',
                    time:5000,
                    position:'top-right',
                    icon:'query_builder'
                })
        }
        this._vm.$vs.loading.close('.form-loading > .con-vs-loading')
    },
    
    // /////////////////////////////////////////////
    // Approvisionnement
    // /////////////////////////////////////////////
    SET_APP_ART_LIST(state,list){
    // console.log(state.listeMagasin)
      state.listeApprovisionnement=list 
    // console.log(state.listeApprovisionnement)
    },
  
    CREATE_APPROV_SUCCESS(state,payload){
    if(payload.fail)
    {
      for(const item in payload.errors)
      for(const k in payload.errors[item])
      this._vm.$vs.notify({
        title:" Attention !",
        text: payload.errors[item][k],
        color:'warning',
        time:5000,
        i:'top-right',
        icon:'query_builder'
      })
    }
    else{
      state.listeApprovisionnement.unshift(payload);
      this._vm.$vs.notify({
        title:" Succès !",
        text:" Enrégistrement réussi !",
        color:'success',
        time:1000,
        position:'top-right',
        icon:'query_builder',
        
      });
    }
    //this.magasin.libelle="";
    this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    // console.log(state.listeMagasin)
    },
  
    EDIT_APPROV_SUCCESS(state,payload){
      if(payload.fail)
      {
          for(const item in payload.errors)
          for(const k in payload.errors[item])
          this._vm.$vs.notify({
          title:" Attention !",
          text: payload.errors[item][k],
          color:'warning',
          time:5000,
          postion:'top-right',
          icon:'query_builder'
          })
      }
      else{
          for(const item in state.listeApprovisionnement)
          {
              if(state.listeApprovisionnement[item]['id']==payload.id)
              { 
                  state.listeApprovisionnement.splice(item,1,payload);
              } 
          }
//          console.log(state.listeApprovisionnement)
          this._vm.$vs.notify({
          title:" Succès !",
          text:" Opération reussie !",
          color:'success',
          time:5000,
          postion:'top-right',
          icon:'query_builder'
          });
      }
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeTypArt)
      },
  
    DELETE_APPR_SUCCESS(state,payload) {
    if(payload.fail)
    {
      for(const item in payload.errors)
      for(const k in payload.errors[item])
      this._vm.$vs.notify({
        title:" Attention !",
        text: payload.errors[item][k],
        color:'warning',
        time:5000,
        i:'top-right',
        icon:'query_builder'
      })
    }
    else{ 
      for(const item in state.listeApprovisionnement)
      {
        if(state.listeApprovisionnement[item]['id']==payload.id)
        {
          state.listeApprovisionnement.splice(item,1);
        } 
      }
      this._vm.$vs.notify({
        title:" Succès !",
        text:" Suppression réussie !",
        color:'success',
        time:5000,
        i:'top-right',
        icon:'query_builder'
      });
      
    }
    this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    // console.log(state.listeMagasin)
  },
    
    
    // /////////////////////////////////////////////
    // MAGASIN
    // /////////////////////////////////////////////
    
    
    SET_MAGASIN_LIST(state,list){
    // console.log(state.listeMagasin)
     state.listeMagasin=list 
    // console.log(state.listeMagasin)
   },
    
    SET_APP_MAG_LIST(state,list){
    // console.log(state.listeMagasin)
     state.listeAppMag=list 
    // console.log(state.listeAppMag)
   },

    CREATE_MAGASIN_SUCCESS(state,payload){
    if(payload.fail)
    {
     for(const item in payload.errors)
     for(const k in payload.errors[item])
     this._vm.$vs.notify({
       title:" Attention !",
       text: payload.errors[item][k],
       color:'warning',
       time:5000,
       position:'top-right',
       icon:'query_builder'
     })
    }
    else{
      state.listeMagasin.push(payload);
      this._vm.$vs.notify({
        title:" Succès !",
        text:" Enrégistrement réussi !",
        color:'success',
        time:1000,
        position:'top-right',
        icon:'query_builder',
        
      });
    }
    this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    },

    EDIT_MAGASIN_SUCCESS(state,payload){
      if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         position:'top-right',
         icon:'query_builder'
       })
      }
      else{
        for(const item in state.listeMagasin)
          {
           if(state.listeMagasin[item]['id']==payload.id)
           {
             state.listeMagasin.splice(item,1,payload);
             
           } 
          }
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Modification réussie !",
          color:'success',
          time:5000,
          position:'top-right',
          icon:'query_builder'
        });
      }
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      //console.log(state.listeMagasin)
      },

    DELETE_MAGASIN_SUCCESS(state,payload) {
      if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         position:'top-right',
         icon:'query_builder'
       })
      }
      else{ 
        for(const item in state.listeMagasin)
        {
         if(state.listeMagasin[item]['id']==payload.id)
         {
           state.listeMagasin.splice(item,1);
         } 
        }
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Suppression réussie !",
          color:'success',
          time:5000,
          i:'top-right',
          icon:'query_builder'
        });
        
      }
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
     // console.log(state.listeMagasin)
    },
    
    
    // /////////////////////////////////////////////
    // CASSE
    // /////////////////////////////////////////////
    SET_CASSE_LIST(state,list){
      // console.log(state.listeMagasin)
        state.listeCasse=list 
      // console.log(state.listeCasse)
      },
    
    CREATE_CASSE_SUCCESS(state,payload){
      if(payload.fail)
      {
        for(const item in payload.errors)
        for(const k in payload.errors[item])
        this._vm.$vs.notify({
          title:" Attention !",
          text: payload.errors[item][k],
          color:'warning',
          time:5000,
          i:'top-right',
          icon:'query_builder'
        })
      }
      else{
        state.listeCasse.push(payload);
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeMagasin)
      },
      
    DELETE_CASSE_SUCCESS(state,payload) {
      if(payload.fail)
      {
        for(const item in payload.errors)
        for(const k in payload.errors[item])
        this._vm.$vs.notify({
          title:" Attention !",
          text: payload.errors[item][k],
          color:'warning',
          time:5000,
          i:'top-right',
          icon:'query_builder'
        })
      }
      else{ 
        for(const item in state.listeCasse)
        {
          if(state.listeCasse[item]['id']==payload.id)
          {
            state.listeCasse.splice(item,1);
          } 
        }
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Suppression réussie !",
          color:'success',
          time:5000,
          i:'top-right',
          icon:'query_builder'
        });
        
      }
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeMagasin)
    },

    EDIT_CASSE_SUCCESS(state,payload){
      if(payload.fail)
      {
          for(const item in payload.errors)
          for(const k in payload.errors[item])
          this._vm.$vs.notify({
          title:" Attention !",
          text: payload.errors[item][k],
          color:'warning',
          time:5000,
          postion:'top-right',
          icon:'query_builder'
          })
      }
      else{
          for(const item in state.listeCasse)
          {
              if(state.listeCasse[item]['id']==payload.id)
              {
              state.listeCasse.splice(item,1);
              } 
          }
          state.listeCasse.push(payload);
          this._vm.$vs.notify({
          title:" Succès !",
          text:" Opération reussie !",
          color:'success',
          time:5000,
          postion:'top-right',
          icon:'query_builder'
          });
      }
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeTypArt)
      },
    
    // /////////////////////////////////////////////
    // DEPENSe
    // /////////////////////////////////////////////
    SET_DEPENSE_LIST(state,list){
       state.listeDepense=list 
      // console.log(state.listeTransfert)
    },
     
    CREATE_DEPENSE_SUCCESS(state,payload){
      if(payload.fail){
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         i:'top-right',
         icon:'query_builder'
       })
      }
      else{
        state.listeDepense.unshift(payload);
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeMagasin)
      },
  
    DELETE_DEPENSE_SUCCESS(state,payload) {
        if(payload.fail)
        {
          for(const item in payload.errors)
          for(const k in payload.errors[item])
          this._vm.$vs.notify({
            title:" Attention !",
            text: payload.errors[item][k],
            color:'warning',
            time:5000,
            position:'top-right',
            icon:'query_builder'
          })
        }
        else{ 
          for(const item in state.listeDepense)
          {
            if(state.listeDepense[item]['id']==payload.id)
            {
              state.listeDepense.splice(item,1);
            } 
          }
          this._vm.$vs.notify({
            title:" Succès !",
            text:" Suppression réussie !",
            color:'success',
            time:5000,
            i:'top-right',
            icon:'query_builder'
          });
          
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
        // console.log(state.listeMagasin)
      },

    EDIT_DEPENSE_SUCCESS(state,payload){
        if(payload.fail)
        {
         for(const item in payload.errors)
         for(const k in payload.errors[item])
         this._vm.$vs.notify({
           title:" Attention !",
           text: payload.errors[item][k],
           color:'warning',
           time:5000,
           position:'top-right',
           icon:'query_builder'
         })
        }
        else{
          for(const item in state.listeDepense)
            {
             if(state.listeDepense[item]['id']==payload.id)
             {
               state.listeDepense.splice(item,1,payload);
               
             } 
            }
//          state.listeDepense.push(payload);
          this._vm.$vs.notify({
            title:" Succès !",
            text:" Modification réussie !",
            color:'success',
            time:5000,
            position:'top-right',
            icon:'query_builder'
          });
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
        //console.log(state.listeMagasin)
        },
    
    
    // /////////////////////////////////////////////
    // DEPENSe
    // /////////////////////////////////////////////
    SET_TRANSFERT_LIST(state,list){
      // console.log(state.listeMagasin)
       state.listeTransfert=list 
      // console.log(state.listeTransfert)
    },
    
    CREATE_TRANSFERT_SUCCESS(state,payload){
      if(payload.fail){
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         i:'top-right',
         icon:'query_builder'
       })
      }
      else{
        state.listeTransfert.push(payload);
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeMagasin)
      },
  
    DELETE_TRANSFERT_SUCCESS(state,payload) {
        if(payload.fail)
        {
          for(const item in payload.errors)
          for(const k in payload.errors[item])
          this._vm.$vs.notify({
            title:" Attention !",
            text: payload.errors[item][k],
            color:'warning',
            time:5000,
            i:'top-right',
            icon:'query_builder'
          })
        }
        else{ 
          for(const item in state.listeTransfert)
          {
            if(state.listeTransfert[item]['id']==payload.id)
            {
              state.listeTransfert.splice(item,1);
            } 
          }
          this._vm.$vs.notify({
            title:" Succès !",
            text:" Suppression réussie !",
            color:'success',
            time:5000,
            i:'top-right',
            icon:'query_builder'
          });
          
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
        // console.log(state.listeMagasin)
      },

    EDIT_TRANSFERT_SUCCESS(state,payload){
        if(payload.fail){
            for(const item in payload.errors)
            for(const k in payload.errors[item])
            this._vm.$vs.notify({
            title:" Attention !",
            text: payload.errors[item][k],
            color:'warning',
            time:5000,
            postion:'top-right',
            icon:'query_builder'
            })
        }
        else{
            for(const item in state.listeTransfert){
                if(state.listeTransfert[item]['id']==payload.id){
                state.listeTransfert.splice(item,1);
                } 
            }
            state.listeTransfert.push(payload);
            this._vm.$vs.notify({
            title:" Succès !",
            text:" Opération reussie !",
            color:'success',
            time:5000,
            postion:'top-right',
            icon:'query_builder'
            });
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
        // console.log(state.listeTypArt)
        },
    
    
    
    //////cli
    
    SET_CLIENT_LIST(state,list){
      // console.log(state.listeMagasin)
       state.listeClient=list 
      // console.log(state.listeMagasin)
     },
  
    CREATE_CLIENT_SUCCESS(state,payload){
      if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         i:'top-right',
         icon:'query_builder'
       })
      }
      else{
        state.listeClient.unshift(payload);
//        state.listeClient.push(payload);
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
      // console.log(state.listeMagasin)
      },
  
      EDIT_CLIENT_SUCCESS(state,payload){
        if(payload.fail)
        {
         for(const item in payload.errors)
         for(const k in payload.errors[item])
         this._vm.$vs.notify({
           title:" Attention !",
           text: payload.errors[item][k],
           color:'warning',
           time:5000,
           position:'top-right',
           icon:'query_builder'
         })
        }
        else{
          for(const item in state.listeClient)
            {
             if(state.listeClient[item]['id']==payload.id)
             {
               state.listeClient.splice(item,1,payload);
             } 
            }
//          state.listeClient.push(payload);
          this._vm.$vs.notify({
            title:" Succès !",
            text:" Modification réussie !",
            color:'success',
            time:5000,
            position:'top-right',
            icon:'query_builder'
          });
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
        //console.log(state.listeMagasin)
        },
  
      DELETE_CLIENT_SUCCESS(state,payload) {
        if(payload.fail)
        {
         for(const item in payload.errors)
         for(const k in payload.errors[item])
         this._vm.$vs.notify({
           title:" Attention !",
           text: payload.errors[item][k],
           color:'warning',
           time:5000,
           i:'top-right',
           icon:'query_builder'
         })
        }
        else{ 
          for(const item in state.listeClient)
          {
           if(state.listeClient[item]['id']==payload.id)
           {
             state.listeClient.splice(item,1);
           } 
          }
          this._vm.$vs.notify({
            title:" Succès !",
            text:" Suppression réussie !",
            color:'success',
            time:5000,
            i:'top-right',
            icon:'query_builder'
          });
          
        }
        this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
       // console.log(state.listeClient)
      },
    
    
    
  
    SET_USER_LIST(state,list){
       state.listeUser=list 
     },
  
    
    
    
    
    EDIT_USER_SUCCESS(state,payload){
       if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         position:'top-right',
         icon:'query_builder'
       })
      }
      else{
          
          for(const item in state.listeUser)
            {
             if(state.listeUser[item]['id']==payload.id)
             {
               state.listeUser.splice(item,1,payload);
             } 
            }
        
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    },
    
    
    
    ADD_USER_SUCCESS(state,payload){
       if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         position:'top-right',
         icon:'query_builder'
       })
      }
      else{
          
          
               state.listeUser.unshift(payload);
             
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    },
    
    DELETE_USER_SUCCESS(state,payload){
       if(payload.fail)
      {
       for(const item in payload.errors)
       for(const k in payload.errors[item])
       this._vm.$vs.notify({
         title:" Attention !",
         text: payload.errors[item][k],
         color:'warning',
         time:5000,
         position:'top-right',
         icon:'query_builder'
       })
      }
      else{
          for(const item in state.listeUser)
          {
           if(state.listeUser[item]['id']==payload.id)
           {
             state.listeUser.splice(item,1);
           } 
          }
        this._vm.$vs.notify({
          title:" Succès !",
          text:" Enrégistrement réussi !",
          color:'success',
          time:1000,
          position:'top-right',
          icon:'query_builder',
          
        });
      }
      //this.magasin.libelle="";
      this._vm.$vs.loading.close('.form-loading >.con-vs-loading')
    },
    
    
    CLEAR_INPUT(state,payload){
        console.log(payload)
        if(!payload[0].fail)
        for(const item in payload[1]){
            console.log(item)
            console.log(payload[1][item])
           payload[1][item] = null
        }
    }
    
}

export default mutations
