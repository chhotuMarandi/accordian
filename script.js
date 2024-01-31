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
        if(currentTitle.classList.contains("acitve")){
            currentTitle.classList.remove("active");
        } else {
            let getAllreadyAddClass = document.querySelectorAll(".active");
            // currentTitle.classList.remove(getAllreadyAddClass);
            getAllreadyAddClass.forEach(currentItem=>{
                currentItem.classList.remove("active")
            })
            
            currentTitle.classList.add("active")
        }
    })
});
