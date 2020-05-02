

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        nuevaFruta: '',
        frutas: [{
            nombre: 'Platano',
            cantidad: 1
        },
        {
            nombre: 'Manzana',
            cantidad: 10
        },
        {
            nombre: 'Kiwi',
            cantidad: 0
        }
    ]
    
    },
   methods:{
    agregarFruta(){
        console.log('diste click');
    }
   }
});

