
const create_post_form = document.querySelector('#create_post_form');
const msgs = document.querySelector('.msgs');
const msg = document.querySelector('.msg');


//get post
const getallpost = () => {

    let readpost = readLsData('post');

    // condition 

    if(!readpost){

        msg.innerHTML = `

        <div class="my-3">
        <img src="./create post.PNG" alt="">
    </div>
    <p class="podda">আপনার কোন পোস্ট খুজে পাওয়া যায়নি। ধন্যবাদ ডেভেলপার শারমিন।</p>
       
        
        
        `


    }


    if(readpost){

        let list = '';
        readpost.map((item,index) => {

            list += `

            <img class = "my-3" src="./sorobindu logo.PNG" alt="">
               <p class="podda">${item.massage}</p>
                 <div class="my-3">
                <img class = "w-100" src="${item.img}" alt="">
                <img class = "w-100 my-3" src="./comment.PNG" alt="">
                </div>

              
                
                   
            
            
            
            
            
            `
        })


        msg.innerHTML = list;










    }






}

getallpost();















create_post_form.onsubmit = (e) => {
    e.preventDefault();

    //get element

    const getdata = new FormData(e.target);
    const data = Object.fromEntries(getdata.entries());
    const {massage,img} = Object.fromEntries(getdata.entries());

    //form-validation massage

    if(!massage || !img){
        msgs.innerHTML = setalert('Field must not be empty!')

    }else{
        createLsData('post',data)
        msgs.innerHTML = setalert('Ready to Post Upload','success');
        e.target.reset();
        getallpost();

    }

    console.log(data)
}

