// Data

const data = [
    {
        id: 1,
        question: "What exactly do you want to find out?",
        ans: "It’s good to evaluate the well-being of your business first. Agree company-wide on what KPIs are most relevant for your business and how they already develop. Research different KPI examples and compare them to your own. Think about what way you want them to develop further. Can you influence this development?"
    },
    {
        id: 2,
        question: "What standard KPIs will you use that can help?",
        ans: "OK, let’s move on from the whole genie thing. Sorry, Data Dan! It’s crucial to know what data analysis questions you want to ask from the get-go. They form the bedrock for the rest of this process."
    },
    {
        id: 3,
        question: "Where will your data come from?",
        ans: "Our next step is to identify data sources you need to dig into all your data, pick the fields that you’ll need, leave some space for data you might potentially need in the future, and gather all the information in one place. Be open-minded about your data sources in this step – all departments in your company, sales, finance, IT, etc., have the potential to provide insights."
    },
    {
        id: 4,
        question: "Which scales apply to your different datasets?",
        ans: "You’ll want to be mindful of the level of measurement for your different variables, as this will affect the statistical techniques you will be able to apply in your analysis."
    },
    {
        id: 4,
        question: "How can you ensure data quality?",
        ans: "We already mentioned making sure data is cleaned and prepared to be analyzed is a critical part of it, but there is more. If you want to be successful on this matter, it is necessary to implement a carefully planned data quality management system that involves every relevant data user in the organization as well as data-related processes from acquisition to distribution and analysis"
    },
]

//get Accordian Data

const accordianWrapper = document.querySelector(".wrapper");

function getDataAccordian(){
    accordianWrapper.innerHTML = data.map(dataItem=> `
    
                <div class="box">
                    <div class="title">
                    <h2 class="ques">${dataItem.question}</h2>
                    <i class="fa-solid fa-angle-down"></i>
                    </div>
                    
                    <p class="ans">${dataItem.ans}</p>
                </div>
    `).join(" ");
}

getDataAccordian();

const accordianTitle = document.querySelectorAll(".title");


accordianTitle.forEach(currentTitle => {
    currentTitle.addEventListener("click",(e)=>{
        //check if active class is contain or not if not then add them or remove
        if(currentTitle.classList.contains("active")){
            currentTitle.classList.remove("active");
        } else {
            let getAllreadyActiveClass = document.querySelectorAll(".active");
            
            getAllreadyActiveClass.forEach(currentActiveClass=>{
                currentActiveClass.classList.remove("active")
            });
            
            currentTitle.classList.add("active");
            let icon = document.querySelector("i");
            icon.style.transform = "rotate(180deg)";
            icon.style.transition = "0.3s ease";

        }
    })
});
