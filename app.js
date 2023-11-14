new Vue({
    el: '#app',
    data: {
        houses: [
            {
                id: 1,
                title: 'Villa Elegante',
                location: 'Milano',
                price: '€1500/mese',
                image: 'villa.jpg'
            },
            {
                id: 2,
                title: 'Appartamento Moderno',
                location: 'Roma',
                price: '€1000/mese',
                image: 'appartamento.jpg'
            },
            // Aggiungi altre case secondo necessità
        ]
    },
    template: `
        <div>
            <header>
                <h1>Case in Affitto</h1>
            </header>

            <div class="container">
                <div v-for="house in houses" :key="house.id" class="card">
                    <img :src="'images/' + house.image" alt="Casa in affitto">
                    <h2>{{ house.title }}</h2>
                    <p><strong>Posizione:</strong> {{ house.location }}</p>
                    <p><strong>Prezzo:</strong> {{ house.price }}</p>
                </div>
            </div>
        </div>
    `
});
