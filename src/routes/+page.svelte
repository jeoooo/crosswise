<!-- <script>
    let email = "johnamirson.gorgonio@hcdc.edu.ph";
    let password = "JR2MIANOH2";
    let isLoading = false;
  
    const handleSubmit = async () => {
      isLoading = true;
  
      try {
        const response = await fetch("https://studentportal.hcdc.edu.ph/loginPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            email,
            password,
          }).toString(),
        });
  
        // Handle the response as needed
        console.log(response);
  
      } catch (error) {
        // Handle errors
        console.error(error);
      } finally {
        isLoading = false;
      }
    };
  </script>
  
  <main>
    <form on:submit|preventDefault={handleSubmit}>
      <label>
        Email:
        <input bind:value={email} type="email" />
      </label>
  
      <label>
        Password:
        <input bind:value={password} type="password" />
      </label>
  
      <div class="form-group btn-container">
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Submit"}
        </button>
      </div>
    </form>
  </main>
  
  <style>
    /* Add your CSS styles here */
  </style>
   -->
<p>
	Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, voluptatem hic et qui odio fugit
	dignissimos ad voluptates corporis tempore distinctio labore rerum nemo repellat vel eius enim
	esse. Commodi.
</p>
