const app = Vue.createApp({
    // data, function
    // template: '<h2>I am the template</h2>' 
    data(){
        return {
            url: 'https://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'Name of the Wind', author: 'Patrick Rothfuss'},
                { title: 'The Way of Kings', author: 'Brandon Sanderson'},
                { title: 'The Final Empire', author: 'Brandon Sanderson'}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title){
            this.title = title

        },
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')