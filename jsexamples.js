

        //*******************  FOR LOOP   */
        // usage - when you know ahead of time how many iterations you will be doing

        // for (initial value; looping condition; increment value)
        let loops = 3;
        for (let i=0; i < loops; i++)
        {
            console.log(i);
        }

        // ************** WHILE LOOP *******************
        // usage - when we want to repeat our code DRY but don't know how many times we need to
        // be sure to include a way for the program to exit the condition - the dreaded INFINITE LOOP

        let whileLoop = 0;
        while (whileLoop  <=  10)
        {
           console.log("Loop number is " + whileLoop);
           whileLoop++;
        }
        console.log("Im finished looping");

        // ************************  DO WHILE *******
        // usage - a while loop that MUST at least loop once - the check comes after the first iteration
        
        let untilLoop = 1;
        do{
            console.log("Do Until Loop:  number is " + untilLoop);
            untilLoop++;

        } while ( untilLoop <= 10);


        // *******   Javascript Objects ****************
        // https://www.w3schools.com/js/js_objects.asp
        //object properties are nouns - something that describes 'state'

       

        // **************** So lets talk about Arrays (they are related to objects because they ARE objects)

        // create an array
        const superheros = ["Superman", "Aquaman", "Wonder Woman"]

        //to get to an individual value - use the index number (starting at zero)
        console.log(superheros[0])
        console.log(superheros[1])
        console.log(superheros[2])

        //Loop through the arrays
        // length is an array property which tells us how many elements are in the array

        for (let i=0; i < superheros.length; i++)
        {
            console.log("From the Loop " + superheros[i]);
        }

        // ******* Since Arrays are objects, they have properties .... and methods, 
        //https://www.w3schools.com/jsref/jsref_obj_array.asp
        //

        const moreheros = ["Spiderman", "The Hulk"]

        //some methods mutate or change the original array
        moreheros.push("Ironman");
        console.log(moreheros)

        //some methods make new arrays (non-mutating meaning they don't change the original array)
        const newArray = superheros.concat(moreheros);
        console.log(newArray)


        


