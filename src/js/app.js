// App = {
//   web3Provider: null,
//   contracts: {},

//   init: async function() {
//     // Load pets.
//     // $.getJSON('../pets.json', function(data) {
//     //   var petsRow = $('#petsRow');
//     //   var petTemplate = $('#petTemplate');

//     //   for (i = 0; i < data.length; i ++) {
//     //     petTemplate.find('.panel-title').text(data[i].name);
//     //     petTemplate.find('img').attr('src', data[i].picture);
//     //     petTemplate.find('.pet-breed').text(data[i].breed);
//     //     petTemplate.find('.pet-age').text(data[i].age);
//     //     petTemplate.find('.pet-location').text(data[i].location);
//     //     petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

//     //     petsRow.append(petTemplate.html());
//     //   }
//     // });

//     return await App.initWeb3();
//   },

//   initWeb3: async function() {
//     /*
//      * Replace me...
//      */

//     // if (typeof web3 !== 'undefined') {
//     //   // If a web3 instance is already provided by Meta Mask.
//     //   App.web3Provider = web3.currentProvider;
//     //   web3 = new Web3(web3.currentProvider);
//     //   console.log("hi");
//     // } else {
//     //   // Specify default instance if no web3 instance provided
//     //   App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
//     //   web3 = new Web3(App.web3Provider);
//     //   console.log("bye");
//     // }
//     if (typeof web3 !== 'undefined') {
//       App.web3Provider = web3.currentProvider
//       web3 = new Web3(web3.currentProvider)
//     } else {
//       window.alert("Please connect to Metamask.")
//     }

//     if (window.ethereum) {
//       window.web3 = new Web3(ethereum)
//       try {
//         // Request account access if needed
//         await ethereum.enable()
//         // Acccounts now exposed
//         web3.eth.sendTransaction({/* ... */})
//       } catch (error) {
//         // User denied account access...
//       }
//     }
//     // Legacy dapp browsers...
//     else if (window.web3) {
//       App.web3Provider = web3.currentProvider
//       window.web3 = new Web3(web3.currentProvider)
//       // Acccounts always exposed
//       web3.eth.sendTransaction({/* ... */})
//     }
//     // Non-dapp browsers...
//     else {
//       console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
//     }

//     return App.initAddress();
//   },

//   initAddress: async () => {
//     try {
//     const account = await web3.eth.accounts[0];
//     console.log(account);
//     const todoList = await $.getJSON('TodoList.json');
//     App.contracts.TodoList = TruffleContract(todoList);
//     App.contracts.TodoList.setProvider(App.web3Provider);
    
//     App.todoList = await App.contracts.TodoList.deployed()
//     const taskCount = await App.todoList.taskCount();
//     console.log(taskCount);
//     // web3.eth.getAccounts().then(function(acc){ accounts = acc })
//     // console.log(accounts[0])
//     return App.initContract();
//     } catch(err){
//       console.log(err);
//     }
//   },

//   initContract: function() {
//     /*
//      * Replace me...
//      */
//     const todoList = $.getJSON('TodoList.json')
//     console.log(todoList);

//     return App.bindEvents();
//   },

//   bindEvents: function() {
//     $(document).on('click', '.btn-adopt', App.handleAdopt);
//   },

//   markAdopted: function() {
//     /*
//      * Replace me...
//      */
//   },

//   handleAdopt: function(event) {
//     event.preventDefault();

//     var petId = parseInt($(event.target).data('id'));

//     /*
//      * Replace me...
//      */
//   }

// };

// $(function() {
//   $(window).load(function() {
//     App.init();
//   });
// });
App = {
  load: async() => {
    await App.loadWeb3(),
    await App.loadAccount()
  },

  loadWeb3: async () => {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      window.alert("Please connect to Metamask.")
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum)
      try {
        // Request account access if needed
        await ethereum.enable()
        // Acccounts now exposed
        web3.eth.sendTransaction({/* ... */})
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  loadAccount: async() => {
    App.account = web3.eth.accounts[0];
    console.log(App.account);
  },
}

$(() => {
  $(window).load(() => {
    App.load()
  })
})