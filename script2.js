function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
let  myLibrary = [];
function addBook(){
    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let pages = document.querySelector('#pages')
    let status = document.querySelector('#status')
    let newbk=new book(title.value,author.value,pages.value,status.value)
    myLibrary.push(newbk)
    console.log(myLibrary)
    newbk.createTable()
}

    
class book{
    constructor(title,author,pages,status){
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.status = status
    }
    
    createTable(){
        let warning = document.querySelector('#warning')
        if(this.title===''||this.author===''||this.pages===''){
            warning.textContent = 'Please fill the blanks'
        }
        else{
            warning.textContent = ''
        let table = document.querySelector('#libraryTable')
        let row = table.insertRow(1);
        let cell2 = row.insertCell(0);
        let cell3 = row.insertCell(1);
        let cell4 = row.insertCell(2);
        let cell5 = row.insertCell(3);
        let cell6 = row.insertCell(4);
        let toggle = document.createElement('BUTTON')
        toggle.innerText = 'Change Status'
        toggle.classList.add('delbtn')
        cell6.appendChild(toggle)
        toggle.addEventListener('click',()=>{
            if(cell5.innerText==='Read'){
                cell5.innerText='Pending'
            }
            else{
                cell5.innerText='Read'
            }
        })
        let btn = document.createElement('BUTTON')
        btn.innerText = 'Delete'
        btn.classList.add('delbtn')
        cell6.appendChild(btn)
        let idx = document.createElement('div')
        idx.classList.add('idx')
        cell5.appendChild(idx)
        btn.addEventListener('click',(e)=>{
            console.log(e)
            row.deleteCell(0);
            row.deleteCell(1);
            row.deleteCell(2);
            row.deleteCell(0);
            row.deleteCell(0);
            //myLibrary.splice(Number(btn.innerText.split(' ')[2])-1,1)
            myLibrary.splice(Number(idx.innerText),1)
            if(myLibrary.length===1){
                myLibrary.splice(0,1)
            }
        })
        
        for(let i=0;i<myLibrary.length;i++){
        cell2.textContent = myLibrary[i].title
        cell3.textContent = myLibrary[i].author
        cell4.textContent = myLibrary[i].pages
        cell5.innerHTML = myLibrary[i].status
       // btn.innerText = 'Delete row '+(i+1)
        idx.innerText = i
        console.table(myLibrary)
        }
        }
        
}
    }
    
