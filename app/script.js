// Function to save favorite recipes to localStorage
function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Function to load favorite recipes from localStorage
function loadFavorites() {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
}

// Load favorites from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
    const favorites = loadFavorites();
    displayFavorites(favorites);
    displayRecipes(recipes); // Display all recipes initially
});

// Search button click event
document.getElementById('search-button').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients-input').value.split(',');
    searchRecipes(ingredients);
});

// Toggle favorites button click event
document.getElementById('toggle-favorites-button').addEventListener('click', function() {
    const favoritesContainer = document.getElementById('favorites-container');
    const recipesContainer = document.getElementById('recipes-container');
    if (favoritesContainer.classList.contains('hidden')) {
        favoritesContainer.classList.remove('hidden');
        recipesContainer.classList.add('hidden');
        displayFavorites(loadFavorites());
    } else {
        favoritesContainer.classList.add('hidden');
        recipesContainer.classList.remove('hidden');
    }
});

const recipes = [
    {
        name: 'Grilled Chicken Salad',
        ingredients: ['chicken', 'lettuce', 'tomato', 'cucumber'],
        nutrition: {
            calories: 300,
            protein: '25g',
            carbohydrates: '20g',
            fat: '10g',
            vitamins: 'Vitamin A, Vitamin C'
        },
        videoUrl: 'https://www.youtube.com/embed/vowdMP-iFDg?si=RdWIa3NDhmImvKr-'
    },
    {
        name: 'Vegetable Stir Fry',
        ingredients: ['broccoli', 'carrot', 'bell pepper', 'tomato', 'soy sauce'],
        nutrition: {
            calories: 200,
            protein: '10g',
            carbohydrates: '30g',
            fat: '5g',
            vitamins: 'Vitamin A, Vitamin C, Vitamin K'
        },
        videoUrl: 'https://www.youtube.com/embed/10aJoTHjX0c?si=us6fKdvtTTJLmbyu'
    },
    {
        name: 'Vegetable Millet Roti',
        ingredients: ['millet flour', 'carrot', 'spinach', 'green chili', 'cumin seeds', 'salt', 'water'],
        nutrition: {
            calories: 150,
            protein: '5g',
            carbohydrates: '25g',
            fat: '3g',
            vitamins: 'Vitamin A, Vitamin C, Iron'
        },
        videoUrl: 'https://www.youtube.com/embed/ABx4blleM20?si=HAvxu7YhzI4mZSB_'
    },
    {
        name: 'Oats Dosa',
        ingredients: ['rolled oats', 'rice flour', 'semolina', 'yogurt', 'ginger', 'green chili', 'salt', 'water'],
        nutrition: {
            calories: 120,
            protein: '5g',
            carbohydrates: '20g',
            fat: '3g',
            vitamins: 'Vitamin B6, Iron'
        },
        videoUrl:'<iframe width="560" height="315" src="https://www.youtube.com/embed/C_14jXYq8AQ?si=QnqgjhfBkwz6Knp2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Rava Idli',
        ingredients: ['semolina (rava)', 'curd', 'carrot', 'ginger', 'green chili', 'coriander leaves', 'mustard seeds', 'cashew nuts', 'baking soda', 'salt', 'oil'],
        nutrition: {
            calories: 150,
            protein: '3g',
            carbohydrates: '20g',
            fat: '7g',
            vitamins: 'Vitamin A, Vitamin C, Iron'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DyeMeml1Fv0?si=16HOFLedJI3zdXjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Ven Pongal',
        ingredients: ['rice', 'moong dal', 'ginger', 'black pepper', 'ghee'],
        nutrition: {
            calories: 200,
            protein: '6g',
            carbohydrates: '30g',
            fat: '5g',
            vitamins: 'Vitamin B6, Iron'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GycAtFmGljs?si=vAjYZSC7ctRwMezI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Green Tea',
        ingredients: ['green tea leaves', 'hot water'],
        nutrition: {
            calories: 0,
            protein: '0g',
            carbohydrates: '0g',
            fat: '0g',
            vitamins: 'Catechins, Caffeine'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qQjgB-aZyOk?si=F7FEKI1uqktToRY9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Mushroom Rice',
        ingredients: ['rice', 'mushrooms', 'onion', 'garlic', 'vegetable broth', 'butter', 'parsley', 'salt', 'pepper'],
        nutrition: {
            calories: 250,
            protein: '6g',
            carbohydrates: '45g',
            fat: '5g',
            vitamins: 'Vitamin B6, Vitamin D'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/DFN-cB-iHmY?si=wFzFt3n-8JemY9ai" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Paneer Curry',
        ingredients: ['paneer', 'onion', 'tomato', 'ginger', 'garlic', 'green chili', 'coriander powder', 'cumin powder', 'turmeric powder', 'garam masala', 'salt', 'oil', 'cream'],
        nutrition: {
            calories: 300,
            protein: '15g',
            carbohydrates: '12g',
            fat: '20g',
            vitamins: 'Vitamin A, Vitamin C'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/4p83Ved7Lsk?si=lcXU3V28tlQPo5EX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Rasam',
        ingredients: ['tomato', 'tamarind', 'garlic', 'green chili', 'curry leaves', 'coriander leaves', 'mustard seeds', 'cumin seeds', 'turmeric powder', 'rasam powder', 'salt', 'oil'],
        nutrition: {
            calories: 80,
            protein: '2g',
            carbohydrates: '10g',
            fat: '4g',
            vitamins: 'Vitamin A, Vitamin C'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6KH8azxY98s?si=6yJVJsID-SQ0YJVX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Curd Rice',
        ingredients: ['rice', 'curd', 'milk', 'salt', 'ginger', 'green chili', 'curry leaves', 'mustard seeds', 'cashew nuts', 'coriander leaves', 'oil'],
        nutrition: {
            calories: 250,
            protein: '6g',
            carbohydrates: '40g',
            fat: '8g',
            vitamins: 'Vitamin D, Vitamin B12'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VFpzansM-XM?si=XJK-t8ZZq7zOD32D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Mixed Fruit Juice',
        ingredients: ['apple', 'orange', 'banana', 'strawberries', 'kiwi', 'honey', 'ice cubes'],
        nutrition: {
            calories: 150,
            protein: '2g',
            carbohydrates: '35g',
            fat: '1g',
            vitamins: 'Vitamin C, Vitamin A'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/F9s77gI__r0?si=t1fZIdqphDsoXx14" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Chicken Biryani',
        ingredients: ['basmati rice', 'chicken', 'yogurt', 'onion', 'tomato', 'ginger-garlic paste', 'green chili', 'mint leaves', 'coriander leaves', 'spices (cinnamon, cardamom, cloves)', 'ghee', 'saffron',  'salt'],
        nutrition: {
            calories: 450,
            protein: '30g',
            carbohydrates: '50g',
            fat: '15g',
            vitamins: 'Vitamin A, Vitamin C'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/95BCU1n268w?si=gNArGiXXRSadFjZE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        name: 'Jeera Rice',
        ingredients: ['basmati rice', 'cumin seeds', 'ghee or oil', 'bay leaf', 'cloves', 'cardamom pods', 'cinnamon stick', 'salt', 'water'],
        nutrition: {
            calories: 200,
            protein: '4g',
            carbohydrates: '35g',
            fat: '5g',
            vitamins: 'Vitamin B6'
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zvn17Jgk6mE?si=KTiIR-lynhUTH-lT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Brinjal Curry",
        "ingredients": ["brinjal (eggplant)", "onions", "tomatoes", "garlic", "ginger", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "salt", "oil", "water"],
        "nutrition": {
            "calories": 180,
            "protein": "3g",
            "carbohydrates": "20g",
            "fat": "10g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/MHsaJICXZ7Q?si=--jbmmcJTLbM7N8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Tomato Rice",
        "ingredients": ["basmati rice", "tomatoes", "onions", "garlic", "ginger", "green chilies", "curry leaves", "mustard seeds", "cumin seeds", "turmeric powder", "red chili powder", "salt", "oil", "water"],
        "nutrition": {
            "calories": 250,
            "protein": "5g",
            "carbohydrates": "40g",
            "fat": "8g",
            "vitamins": "Vitamin A"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/njK2iywAJ_k?si=6Stan_Sc5vXw3mbp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Gulab Jamun",
        "ingredients": ["khoya", "all-purpose flour", "baking powder", "milk", "sugar", "water", "cardamom powder", "rose water", "ghee or oil for frying"],
        "nutrition": {
            "calories": 300,
            "protein": "6g",
            "carbohydrates": "45g",
            "fat": "10g",
            "vitamins": "Vitamin A"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/J3O0ZEJYLFQ?si=qEMA_7J7ChpFmDEm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Rasagulla",
        "ingredients": ["paneer", "sugar", "water", "cardamom powder", "rose water"],
        "nutrition": {
            "calories": 150,
            "protein": "5g",
            "carbohydrates": "30g",
            "fat": "3g",
            "vitamins": "Vitamin D"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ZS14NxiAOt4?si=_h17McF3VHIi8ybN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Mango Pickle",
        "ingredients": ["raw mangoes", "mustard seeds", "fenugreek seeds", "red chili powder", "turmeric powder", "salt", "mustard oil"],
        "nutrition": {
            "calories": 50,
            "protein": "1g",
            "carbohydrates": "5g",
            "fat": "3g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0RjRfKxDe3U?si=0PVL4KZsuv_qgGBQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Sweet Corn Chat",
        "ingredients": ["sweet corn kernels", "onions", "green chilies", "curry leaves", "mustard seeds", "cumin seeds", "turmeric powder", "salt", "oil"],
        "nutrition": {
            "calories": 120,
            "protein": "3g",
            "carbohydrates": "20g",
            "fat": "5g",
            "vitamins": "Vitamin B1"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fj05qMM4tqw?si=ufqZ8GbcfOx0zi2v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Baby Corn Curry",
        "ingredients": ["baby corn", "onions", "tomatoes", "garlic", "ginger", "green chilies", "turmeric powder", "coriander powder", "cumin powder", "garam masala", "salt", "oil", "water"],
        "nutrition": {
            "calories": 200,
            "protein": "4g",
            "carbohydrates": "25g",
            "fat": "8g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/s0VXCNYxDlc?si=elrjGgYuZ5WE-pQ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Upma",
        "ingredients": ["semolina (rava)", "onions", "green chilies", "ginger", "curry leaves", "mustard seeds", "cumin seeds", "urad dal", "chana dal", "cashew nuts", "ghee or oil", "salt", "water"],
        "nutrition": {
            "calories": 250,
            "protein": "6g",
            "carbohydrates": "40g",
            "fat": "8g",
            "vitamins": "Vitamin B6"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HVcDd_8QqaA?si=6RIMQUWJVD0OBfu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Vada",
        "ingredients": ["urad dal", "onions", "green chilies", "curry leaves", "ginger", "salt", "oil for frying"],
        "nutrition": {
            "calories": 300,
            "protein": "10g",
            "carbohydrates": "40g",
            "fat": "10g",
            "vitamins": "Vitamin B6"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Zjm9fQBBHiM?si=6V0IHyIHB7Rd_1-v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Fish Curry",
        "ingredients": ["fish fillets", "onions", "tomatoes", "garlic", "ginger", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "curry leaves", "coconut milk", "salt", "oil", "water"],
        "nutrition": {
            "calories": 350,
            "protein": "25g",
            "carbohydrates": "10g",
            "fat": "20g",
            "vitamins": "Vitamin B12"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/8oo_oUDdiMY?si=nIOl4VOwA0wEC09e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Pappu",
        "ingredients": ["toor dal (split pigeon peas)", "turmeric powder", "green chilies", "tomatoes", "onions", "garlic", "ginger", "mustard seeds", "cumin seeds", "curry leaves", "red chili powder", "salt", "oil", "water"],
        "nutrition": {
            "calories": 200,
            "protein": "10g",
            "carbohydrates": "30g",
            "fat": "4g",
            "vitamins": "Vitamin B1"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jBC3zbC-gtU?si=0iOJRl_8A96dL5aC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Lady's Finger Curry",
        "ingredients": ["lady's finger (okra)", "onions", "tomatoes", "garlic", "ginger", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "salt", "oil", "water"],
        "nutrition": {
            "calories": 150,
            "protein": "4g",
            "carbohydrates": "20g",
            "fat": "6g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/qHDLUKHmOc4?si=oGX1zA1tpAx3N59P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Fruit Salad",
        "ingredients": ["apples", "bananas", "grapes", "oranges", "strawberries", "blueberries", "kiwi", "honey", "lemon juice", "mint leaves"],
        "nutrition": {
            "calories": 120,
            "protein": "1g",
            "carbohydrates": "30g",
            "fat": "0g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nTm-_KujooY?si=f9jH9ud2x5PNxewI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Egg Curry",
        "ingredients": ["eggs", "onions", "tomatoes", "garlic", "ginger", "green chilies", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "curry leaves", "coconut milk", "salt", "oil", "water"],
        "nutrition": {
            "calories": 220,
            "protein": "10g",
            "carbohydrates": "15g",
            "fat": "12g",
            "vitamins": "Vitamin B12"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/UzjCJV-dvf0?si=wcjPbKfpBmZP96eR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Egg Biryani",
        "ingredients": ["basmati rice", "eggs", "onions", "tomatoes", "garlic", "ginger", "green chilies", "yogurt", "mint leaves", "coriander leaves", "bay leaf", "cloves", "cardamom pods", "cinnamon stick", "turmeric powder", "coriander powder", "cumin powder", "red chili powder", "garam masala", "salt", "oil", "water"],
        "nutrition": {
            "calories": 300,
            "protein": "12g",
            "carbohydrates": "40g",
            "fat": "10g",
            "vitamins": "Vitamin B12"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AM-LL_rg2pE?si=oxAftY7LWmdepO6I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    {
        "name": "Lemon Rice",
        "ingredients": ["basmati rice", "lemons", "turmeric powder", "green chilies", "ginger", "curry leaves", "mustard seeds", "cumin seeds", "urad dal", "chana dal", "cashew nuts", "salt", "oil", "water"],
        "nutrition": {
            "calories": 250,
            "protein": "5g",
            "carbohydrates": "40g",
            "fat": "8g",
            "vitamins": "Vitamin C"
        },
        videoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/S582ox6c4l4?si=Po46SbhUWe08hddj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    },
    
];

// Function to search recipes based on ingredients
function searchRecipes(ingredients) {
    const matchedRecipes = recipes.filter(recipe => {
        return ingredients.every(ingredient => recipe.ingredients.includes(ingredient.trim().toLowerCase()));
    });
    displayRecipes(matchedRecipes);
}

// Function to display recipes
function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    if (recipes.length === 0) {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
        return;
    }

    recipes.forEach(recipe => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');

        const recipeInfoDiv = document.createElement('div');
        recipeInfoDiv.classList.add('recipe-info');
        recipeInfoDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
            <p><strong>Calories:</strong> ${recipe.nutrition.calories}</p>
            <p><strong>Protein:</strong> ${recipe.nutrition.protein}</p>
            <p><strong>Carbohydrates:</strong> ${recipe.nutrition.carbohydrates}</p>
            <p><strong>Fat:</strong> ${recipe.nutrition.fat}</p>
            <p><strong>Vitamins:</strong> ${recipe.nutrition.vitamins}</p>
            ${recipe.videoUrl ? `<div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${extractVideoId(recipe.videoUrl)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>` : ''}
        `;

        const recipeActionsDiv = document.createElement('div');
        recipeActionsDiv.classList.add('recipe-actions');
        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = 'Add to Favorites';
        favoriteButton.addEventListener('click', function() {
            addToFavorites(recipe);
        });

        const printButton = document.createElement('button');
        printButton.textContent = 'Print Recipe';
        printButton.addEventListener('click', function() {
            printRecipe(recipe);
        });

        recipeActionsDiv.appendChild(favoriteButton);
        recipeActionsDiv.appendChild(printButton);
        recipeDiv.appendChild(recipeInfoDiv);
        recipeDiv.appendChild(recipeActionsDiv);

        recipesContainer.appendChild(recipeDiv);
    });
}

// Function to add a recipe to favorites
function addToFavorites(recipe) {
    const favorites = loadFavorites();
    if (!favorites.find(fav => fav.name === recipe.name)) {
        favorites.push(recipe);
        saveFavorites(favorites);
        displayFavorites(favorites);
    }
}

// Function to remove a recipe from favorites
function removeFromFavorites(recipeName) {
    let favorites = loadFavorites();
    favorites = favorites.filter(fav => fav.name !== recipeName);
    saveFavorites(favorites);
    displayFavorites(favorites);
}

// Function to display favorite recipes
function displayFavorites(favorites) {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favorites.forEach(favorite => {
        const favoriteItem = document.createElement('li');
        favoriteItem.classList.add('favorite-recipe');
        favoriteItem.innerHTML = `
            ${favorite.name} 
            <button onclick="removeFromFavorites('${favorite.name}')">Remove</button>
        `;
        favoriteItem.addEventListener('click', function() {
            displayFavoriteDetails(favorite);
        });
        favoritesList.appendChild(favoriteItem);
    });
}

// Function to display details of a favorite recipe
function displayFavoriteDetails(recipe) {
    const recipesContainer = document.getElementById('recipes-container');
    recipesContainer.innerHTML = '';

    const recipeDiv = document.createElement('div');
    recipeDiv.classList.add('recipe');

    const recipeInfoDiv = document.createElement('div');
    recipeInfoDiv.classList.add('recipe-info');
    recipeInfoDiv.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
        <p><strong>Calories:</strong> ${recipe.nutrition.calories}</p>
        <p><strong>Protein:</strong> ${recipe.nutrition.protein}</p>
        <p><strong>Carbohydrates:</strong> ${recipe.nutrition.carbohydrates}</p>
        <p><strong>Fat:</strong> ${recipe.nutrition.fat}</p>
        <p><strong>Vitamins:</strong> ${recipe.nutrition.vitamins}</p>
        ${recipe.videoUrl ? `<div class="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${extractVideoId(recipe.videoUrl)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>` : ''}
    `;

    recipeDiv.appendChild(recipeInfoDiv);
    recipesContainer.appendChild(recipeDiv);
    
}

// Function to extract YouTube video ID from URL
function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([^&=\n%\?]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to print a recipe
function printRecipe(recipe) {
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Print Recipe</title></head><body>');
    printWindow.document.write(`<h1>${recipe.name}</h1>`);
    printWindow.document.write(`<p><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>`);
    printWindow.document.write(`<p><strong>Calories:</strong> ${recipe.nutrition.calories}</p>`);
    printWindow.document.write(`<p><strong>Protein:</strong> ${recipe.nutrition.protein}</p>`);
    printWindow.document.write(`<p><strong>Carbohydrates:</strong> ${recipe.nutrition.carbohydrates}</p>`);
    printWindow.document.write(`<p><strong>Fat:</strong> ${recipe.nutrition.fat}</p>`);
    printWindow.document.write(`<p><strong>Vitamins:</strong> ${recipe.nutrition.vitamins}</p>`);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
