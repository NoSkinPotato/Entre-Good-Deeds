const jobs = [
    { title: 'Frontend Developer', distance: '5 km away', description: 'Gay ass job fr fr'},
    { title: 'Backend Developer', distance: '10 km away', description: 'yo mama so fat'},
    { title: 'Data Scientist', distance: '2 km away', description: 'But Bayu is fatter tho'},
    { title: 'Product Manager', distance: '1 km away', description: 'Bayu gendut, beruntung aja dia pinter' },
    { title: 'Product Manager', distance: '1 km away', description: 'Bayu gendut, beruntung aja dia pinter' }
  ];
  
  function renderJobList() {
    const jobListContainer = document.getElementById("job-list-container")
    jobListContainer.innerHTML = '';

    jobs.forEach(job => {
        // Create job item element
        const jobItem = document.createElement("div");
        jobItem.id = "job-item";

        const jobLeft = document.createElement("div");
        jobLeft.id = "job-left";
  
        const jobTitle = document.createElement("h3");
        let node = document.createTextNode(job.title);
        jobTitle.appendChild(node);
        jobTitle.id = "job-title";
  
        const jobDistance = document.createElement("h5");
        node = document.createTextNode(job.distance);
        jobDistance.appendChild(node);
        jobDistance.id = "job-distance";
  
        const jobDescr = document.createElement("h6");
        node = document.createTextNode(job.description);
        jobDescr.appendChild(node);
        jobDescr.id = "job-descr";
  
        jobLeft.appendChild(jobTitle);
        jobLeft.appendChild(jobDistance);
        jobLeft.appendChild(jobDescr);
  
        const jobButton = document.createElement("button");
        node = document.createTextNode("Details");
        jobButton.appendChild(node);
        jobButton.id = "job-dtl-btn";
  
        jobItem.appendChild(jobLeft);
        jobItem.appendChild(jobButton);
  
        // Append job item to the job list container
        jobListContainer.appendChild(jobItem);
      });
  }


  renderJobList();