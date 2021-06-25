const API = {
    //Get last workout
    async getBooks() {
        let res;
        try {
            res = await fetch("/api/books");
        } catch (err) {
            console.log(err)
        }
        const json = await res.json();
        console.log('json');
        console.log(json);

        return json;
    },
  
    //Add exercise
    // async addExercise(data) {
    //   const id = location.search.split("=")[1];
  
    //   const res = await fetch("/api/workouts/" + id, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    //   });
  
    //   const json = await res.json();
  
    //   return json;
    // },
  
    //Create workout
    // async createWorkout(data = {}) {
    //   const res = await fetch("/api/workouts", {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: { "Content-Type": "application/json" }
    //   });
  
    //   const json = await res.json();
  
    //   return json;
    // },
  
    //Get workouts in range
    // async getWorkoutsInRange() {
    //   const res = await fetch(`/api/workouts/range`);
    //   const json = await res.json();
  
    //   return json;
    // },
  };
  