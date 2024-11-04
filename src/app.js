

import chatImageJoker from "@/ss_trailer1_085.jpg"
import chatImageJoker2 from "@/1475670624_jaeyong-jung_harley-quinn.jpg"
import chatImageCillian from "@/c2c529459704340f67dbc2363bd95077.jpg"
import chatImageCillian2 from "@/MV5BNzkyOTcyMzI4OF5BMl5BanBnXkFtZTgwMzU4NTEyMTE@._V1_.jpg"



let objectiCllian2 = {
    sentStatus: "outgoing",
    contentType: "textMessage",
    content: {
        imgSrc: "",
        textData: "Здарова братец",
        sentAt: "10:16"
    }
}

let objectiCllian3 = {
    sentStatus: "outgoing",
    contentType: "mediaMessage",
    content: {
        imgSrc: chatImageCillian,
        textData: "Такой накину",
        sentAt: "10:17"
    }
}

let objectiCllian = {
    sentStatus: "incoming",
    contentType: "textMessage",
    content: {
        imgSrc: "",
        textData: "Не забудь, сегодня едем на скачки, костюмчик нормальный приодень",
        sentAt: "7:30"
    }
}

let objectiCllian4 = {
    sentStatus: "incoming",
    contentType: "mediaMessage",
    content: {
        imgSrc: chatImageCillian2,
        textData: "Брату скажи, чтобы завязывал со снегом",
        sentAt: "7:30"
    }
}

// let objstrC = JSON.stringify(objectiCllian)
// let objstrC2 = JSON.stringify(objectiCllian2)
// let objstrC3 = JSON.stringify(objectiCllian3)
// let objstrC4 = JSON.stringify(objectiCllian4)


let messagesCollectionStorageCillian = JSON.stringify([objectiCllian, objectiCllian2, objectiCllian3, objectiCllian4])


localStorage.setItem("85968cfd-32bf-4a7a-b2f7-e14a3cab6ad0", messagesCollectionStorageCillian)


let objectjoker = {
    sentStatus: "outgoing",
    contentType: "textMessage",
    content: {
        imgSrc: "",
        textData: "Че, как ты там потаскуха",
        sentAt: "10:16"
    }
}

let objectjoker2 = {
    sentStatus: "outgoing",
    contentType: "mediaMessage",
    content: {
        imgSrc: chatImageJoker2,
        textData: "Приеду, буду наказывать, да да да вот так вот а ты не верил, я сейчас самая крутышка на райончике хахахаха красотка я",
        sentAt: "10:17"
    }
}

let objectjoker3 = {
    sentStatus: "incoming",
    contentType: "textMessage",
    content: {
        imgSrc: "",
        textData: ")",
        sentAt: "7:30"
    }
}

let objectjoker4 = {
    sentStatus: "incoming",
    contentType: "mediaMessage",
    content: {
        imgSrc: chatImageJoker,
        textData: "С друзьями на отдыхе",
        sentAt: "7:30"
    }
}


// let objstrJ = JSON.stringify(objectjoker)
// let objstrJ2 = JSON.stringify(objectjoker2)
// let objstrJ3 = JSON.stringify(objectjoker3)
// let objstrJ4 = JSON.stringify(objectjoker4)


let messagesCollectionStorageJoker = JSON.stringify([objectjoker, objectjoker2, objectjoker3, objectjoker4])


localStorage.setItem("f2dfa4db-6004-4ff3-a37e-6c0e3f18e816", messagesCollectionStorageJoker)



import imgPrev from "@/joker-anatomy2-superJumbo.jpg"
import imgPrev2 from "@/original.jpg"
import imgPrev3 from "@/292030_screenshots_20181116151013_1.jpg"



let userChatProfile1 = {
    userId: "f2dfa4db-6004-4ff3-a37e-6c0e3f18e816",
    userName: "Джокер",
    userImg: imgPrev
}

let userChatProfile2 = {
    userId: "85968cfd-32bf-4a7a-b2f7-e14a3cab6ad0",
    userName: "Киллиан",
    userImg: imgPrev2
}

let userChatProfile3 = {
    userId: "f9a2fbc6-e8c3-4d94-9b70-68d417bf1ae8",
    userName: "Цири",
    userImg: imgPrev3
}


// const jsonChatProfile1 = JSON.stringify(userChatProfile1)
// const jsonChatProfile2 = JSON.stringify(userChatProfile2)
// const jsonChatProfile3 = JSON.stringify(userChatProfile3)



localStorage.setItem("users", JSON.stringify([userChatProfile1, userChatProfile2, userChatProfile3]))





function lastMessageScroll(b) {
    let e = document.querySelector('.wrapper_Scrollbar');
    if (!e) return ; 
    
    e.scrollIntoView({
        behavior: b || 'auto',
        block: 'end',
    });
}




function getChatProfiles(chatsProfiles) {
    console.log(chatsProfiles)
    for(let i=0; i<chatsProfiles.length; i++) {

        const chatData = chatsProfiles[i]
        const storageData = localStorage.getItem(chatData.userId)
        console.log(storageData)
        const lastChatData = JSON.parse(storageData)?.slice(-1)[0]
        console.log(lastChatData)

        let block = document.createElement("div")
        block.className = "block"
        block.setAttribute("name", "hasID")
        block.id = chatData.userId


        let imgbx = document.createElement("div")
        imgbx.className = "imgbx"


        let img = document.createElement("img")
        img.src = chatData.userImg


        let details = document.createElement("div")
        details.className = "details"


        let listHead = document.createElement("div")
        listHead.className = "listHead"


        let h4 = document.createElement("h4")
        h4.innerText = chatData.userName

        let time = document.createElement("p")
        time.className = "time"
        time.innerText = lastChatData?.content?.sentAt ?? null


        let messageP = document.createElement("div")
        messageP.className = "messageP"

        if(lastChatData?.contentType === "mediaMessage") {
            let thumbMediaPreview = document.createElement("div")
            thumbMediaPreview.className = "thumbMediaPreview"

            let imgPreview = document.createElement("img")
            imgPreview.src = lastChatData.content.imgSrc

            thumbMediaPreview.append(imgPreview)
            messageP.append(thumbMediaPreview)
        }


        let paragragp = document.createElement("p")
        paragragp.innerText = lastChatData?.content?.textData ?? "Новый чат"

        messageP.append(paragragp)

        listHead.append(h4)
        listHead.append(time)
        details.append(listHead)
        details.append(messageP)
        imgbx.append(img)
        block.append(imgbx)
        block.append(details)

        document.querySelector(".chatList").append(block)
        // chatList.append(block)

    }
}



const data = localStorage.getItem("users")
// usersChatsProfiles = JSON.parse(data)
getChatProfiles(JSON.parse(data))
const rightSideSection = document.querySelector(".rightSide")

if(document.body.clientWidth > 425) {
    rightSideSection.classList.add("rightSideOnLoad")
}


// const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// document.querySelector("html body").style.height = h
// document.querySelector("html body").style.width = w





const chatWrapper = document.querySelector(`.chatWrapper`)

let total = 0
let counter = 0

const mutCallback = ( mutationsList, observer ) => {
    for( const mutation of mutationsList ) {
        console.log(mutation)
        if ( mutation.type === 'childList' ) {
            for ( const child of mutation.target.children ) {
                for(const message of child.children){
                    for(const content of message.children) {
                        for (const data of content.childre) {
                            if( data.contains("div.img") ) {
                                for ( const img of data.children ) {
                                    if ( img.tagName === "IMG" ) {
                                        total++
                                        img.addEventListener( 'load', loaded, false )
                                    } else if ( style.backgroundImage !== "none" ) {
                                        total++; // keep track of total load events
                                        const img = new Image()
                                        img.addEventListener( 'load', loaded, false )
                                        // extract background image url and add as img src
                                        img.src = style.backgroundImage.slice( 4, -1).replace(/"/g, "" )
                                }}
                            }
                        }
                    }
                }
                // const style = child.currentStyle || window.getComputedStyle( child, false )

                // if ( child.tagName === "IMG" ) {
                //     total++ // keep track of total load events
                //     child.addEventListener( 'load', loaded, false )

                // } else if ( style.backgroundImage !== "none" ) {
                //     total++; // keep track of total load events
                //     const img = new Image()
                //     img.addEventListener( 'load', loaded, false )
                //     // extract background image url and add as img src
                //     img.src = style.backgroundImage.slice( 4, -1).replace(/"/g, "" )
                // }
            } };
        }
    }
function loaded() {
    counter++; // keep track of how many events have fired
    if ( counter >= total ) {
        // All images have loaded so can do final logic here
        page.style.opacity = "1";
        lastMessageScroll("instant")
    }
}

let observer = new MutationObserver(mutCallback => {
    console.log(mutCallback);
})
observer.observe(chatWrapper, {
    childList: true,
    subtree: true,
    characterDataOldValue: true
})



function getChatHeader(userImg, userName, chatHeader) {
    const headerImg = chatHeader.querySelector(".imgText .img img")
    const headerName = chatHeader.querySelector(".imgText .userData h4")
    headerImg.src = userImg.src
    headerName.innerText = userName.innerText
}



function getModalMediaWindow(elemPos) {

    const topOffset = elemPos.top
    const leftOffset = elemPos.left

    let modalMediaView = false

    function initModalWindow(contentUrl, mediaContentText = '', mediaSentDate = '', userName = "null") {
        let modal = document.createElement("div");
        modal.id = "modalWindow"
        modal.classList.add("modalMedia")
        modal.classList.add("visible")

        if(document.body.clientWidth <= 425) {
            modal.animate([
                {backgroundColor: "#00000000"},
                {backgroundColor: "#000000"}
            ], 
            {duration: 200, iterations: 1})
        }


        let modalMediaContent = document.createElement("div")
        modalMediaContent.className = "modalMedia_content"
        modalMediaContent.id = "modalMedia_content"

        let modalContentImg = document.createElement("img")
        modalContentImg.src = contentUrl

        
        if(document.body.clientWidth <= 425) {

            let modalMediaHeader = document.createElement("div")
            modalMediaHeader.classList.add("modalMedia_Header", "visible")
            modalMediaHeader.id = "modalMedia_Header"
    
            let modalHeader_left = document.createElement("div")
            modalHeader_left.className = "modalHeader_left"


            let modalMedia_Header_back = document.createElement("div")
            modalMedia_Header_back.className = "modalMedia_Header_back"
            modalMedia_Header_back.id = "modalBackArrow"

            modalMedia_Header_back.addEventListener("click", (e) => {
                // const modal = e.target.parentNode.parentNode.parentNode.parentNode
                // const img = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0]
                modal.classList.add("removed")
                modalContentImg.style.transform = `translate(${leftOffset}, ${topOffset})`
                modal.addEventListener("transitionend", () => {
                    modal.remove()
                })
            })

            let materialSymbolsOutlined = document.createElement("span")
            materialSymbolsOutlined.className = "material-symbols-outlined"
            materialSymbolsOutlined.innerText = "arrow_back"

            modalMedia_Header_back.append(materialSymbolsOutlined)
            modalHeader_left.append(modalMedia_Header_back)

            let modalMedia_Header_chatData = document.createElement("div")
            modalMedia_Header_chatData.className = "modalMedia_Header_chatData"
    
    
            let modalMedia_Header_chatData_name = document.createElement("div")
            modalMedia_Header_chatData_name.className = "modalMedia_Header_chatData_name"
            modalMedia_Header_chatData_name.innerText = userName
    
    
            let modalMedia_Header_chatData_date = document.createElement("div")
            modalMedia_Header_chatData_date.className = "modalMedia_Header_chatData_date"
            modalMedia_Header_chatData_date.innerText = mediaSentDate
    
    
            let modalMedia_Header_right = document.createElement("div")
            modalMedia_Header_right.className = "modalMedia_Header_right"
    
    
            let shareSymbol = document.createElement("span")
            shareSymbol.className = "material-symbols-outlined"
            shareSymbol.innerText = "share"
    
            let moreSymbol = document.createElement("span")
            moreSymbol.className = "material-symbols-outlined"
            moreSymbol.innerText = "more_vert"


            modalMediaContent.addEventListener("click", () => {
                if(document.body.clientWidth <= 425) {
                    modalMediaHeader.classList.toggle("visible")
                }
            })


    
            modalMedia_Header_chatData.append(modalMedia_Header_chatData_name)
            modalMedia_Header_chatData.append(modalMedia_Header_chatData_date)
            modalHeader_left.append(modalMedia_Header_chatData)
            modalMedia_Header_right.append(shareSymbol)
            modalMedia_Header_right.append(moreSymbol)
            modalMediaHeader.append(modalHeader_left)
            modalMediaHeader.append(modalMedia_Header_right)

            modal.append(modalMediaHeader)
        }






        let imgWrapper = document.createElement("div")
        imgWrapper.className = "img_wrapper"


        if(document.body.clientWidth <= 425) {
            let mediaInitTimer
            modalContentImg.classList.add("mobile")
            
            // modalContentImg.style.setProperty("transition", `all 200ms ease`)

            modalContentImg.style.setProperty("--modalInitialMediaHeight", `${elemPos.height}px`)
            modalContentImg.style.setProperty("--modalInitialMediaWidth", `${elemPos.width}px`)
            modalContentImg.style.setProperty("--modalInitialMediaTopOffset", `${elemPos.top}px`)
            modalContentImg.style.setProperty("--modalInitialMediaLeftOffset", `${elemPos.left}px`)

            mediaInitTimer = setTimeout(() => {
                modalContentImg.style.removeProperty("--modalInitialMediaHeight")
                modalContentImg.style.removeProperty("--modalInitialMediaWidth")
                modalContentImg.style.removeProperty("--modalInitialMediaTopOffset")
                modalContentImg.style.removeProperty("--modalInitialMediaLeftOffset")
                modalContentImg.classList.add("initial")
            }, 0)

        } else if(document.body.clientWidth > 425) {
            modalContentImg.classList.add("desktop")
        } 



        modalMediaContent.addEventListener("click", (e) => {
            if(document.body.clientWidth > 425) {
                // const modal = e.target.parentNode.parentNode.parentNode.parentNode
                // const img = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0]
                modal.classList.add("removed")
                modalContentImg.style.transform = `translate(${leftOffset}, ${topOffset})`
                modal.addEventListener("transitionend", () => {
                    modal.remove()
                })
            }
        })



        imgWrapper.append(modalContentImg)
        modalMediaContent.append(imgWrapper)

        if(document.body.clientWidth <= 425) {
            let modalMediaText = document.createElement("div")
            modalMediaText.classList.add("modalMedia_text", "visible")
            modalMediaText.id = "modalMedia_text"
    
            let modalMediaTextParagraph = document.createElement("p")
            modalMediaTextParagraph.innerText = mediaContentText


            modalMediaContent.addEventListener("click", () => {
                if(document.body.clientWidth <= 425) {
                    modalMediaText.classList.toggle("visible")
                }
            })

    
            modalMediaText.append(modalMediaTextParagraph)

            modal.append(modalMediaText)
        }


        modal.append(modalMediaContent)


        if(document.body.clientWidth > 425) {
            let contentBlock = document.createElement("div")
            contentBlock.className = 'contentBlock show'

            let Timer


            let leftSideBlock = document.createElement("div")
            leftSideBlock.className = "leftSideBlock"
            let contentDataBlock = document.createElement("div")
            contentDataBlock.className = "contentDataBlock"
            let channelDateStatus = document.createElement("span")
            channelDateStatus.innerText = userName
            let contentDateStatus = document.createElement("span")
            contentDateStatus.innerText = mediaSentDate

            contentDataBlock.append(channelDateStatus)
            contentDataBlock.append(contentDateStatus)
            leftSideBlock.append(contentDataBlock)

            contentBlock.append(leftSideBlock)


            if(mediaContentText) {
                let textDataBlock = document.createElement("div")
                textDataBlock.className = "textDataBlock"
                let paragraphData = document.createElement("p")
                paragraphData.innerText = mediaContentText
    
                textDataBlock.append(paragraphData)
                contentBlock.append(textDataBlock)
            }


            let rightSideBlock = document.createElement("div")
            rightSideBlock.className = "rightSideBlock"
            let manipulationStatus = document.createElement("div")
            manipulationStatus.className = "manipulationStatus"
            let moreSymbol = document.createElement("span")
            moreSymbol.className = "material-symbols-outlined"
            moreSymbol.innerText = "more_vert"

            manipulationStatus.append(moreSymbol)
            rightSideBlock.append(manipulationStatus)


            Timer = setTimeout(() => {
                contentBlock.classList.add("hide");
                // leftSideBlock.classList.remove("show");
                // textDataBlock.classList.remove("show")
                // rightSideBlock.classList.remove("show")
            }, 5 * 1000);

            modal.addEventListener("mousemove", () => {
                clearTimeout(Timer);

                contentBlock.classList.remove("hide")

                Timer = setTimeout(() => {
                    contentBlock.classList.add("hide");
                    // leftSideBlock.classList.remove("show");
                    // textDataBlock.classList.remove("show")
                    // rightSideBlock.classList.remove("show")
                }, 5 * 1000);
            })


            contentBlock.append(rightSideBlock)

            modal.append(contentBlock)
        }

        // function onClickBackArrow(e) {
        //     if(modalMediaView) {
        //         console.log(e)
        //     }
        // }

        return modal
    }

    

    return {modalMediaView, initModalWindow}

}


let mediaCollection = []

// for(let i; i<mediaCollection.length; i++) {
//     img = mediaCollection[i]
//     img.addEventListener("click", () => {
        
//     })
// }




function showChatMessages(messagesCollection, sentFrom = '', text = '', imgSrc = '', sentAt = '') {
    const chatWrapper = document.querySelector(`.chatWrapper`)

    if (!messagesCollection) {
        chatWrapper.classList.add("nullMessages")

    } else{
        document.querySelector(`.chatWrapper`).classList.add("loading")
        let media = []
        let counter = 0
        chatWrapper.classList.remove("nullMessages")

        for(let i=0; i<messagesCollection.length; i++) {
            // console.log(messagesCollection)
            const messageData = messagesCollection[i]

            let message = document.createElement("div")
            message.className = `message ${messageData.sentStatus === "outgoing" ? "outgoing" : "incoming"}`

            let content = document.createElement("div")
            content.className = "content"

            if(messageData.contentType === "mediaMessage") {

                let img_wrapper = document.createElement("div")
                img_wrapper.className = "img"

                let img = document.createElement("img")
                img.src = messageData.content.imgSrc
                counter++
                media.push(img)
                img.onload = () => {
                    media++
                }
                // console.log(img.complete)
                // addImageProcess(messageData.content.imgSrc).then(img => {
                // console.log(img)
                // })
                // messageData.content.imgSrc
                img.alt = "chatImage"

                mediaCollection.push(img)

                img.addEventListener("click", (e) => {
                    const elemPosition = img.getBoundingClientRect()
                    // console.log(elemPosition)
                    const innerText = messageData.content.textData // === '' ? null : img.parentNode.parentNode.lastElementChild.children[0].innerText
                    const innerDate = messageData.content.sentAt // === '' ? img.parentNode.parentNode.lastElementChild.children[0].children[0].innerText : img.parentNode.parentNode.lastElementChild.lastElementChild.children[0].innerText
                    const userName = document.querySelector(".rightSide .header .imgText .userData h4")
                    console.log(userName.innerText)
                    // console.log(innerText)
                    // console.log(innerDate)
                    const modalW = getModalMediaWindow(elemPosition)
                    console.log(modalW)
                    let modal = modalW.initModalWindow(
                        e.target.currentSrc,
                        innerText,
                        innerDate,
                        userName.innerText,
                    )
                    console.log(modal)
                    modalW.modalMediaView = true
                    document.body.append(modal)
                })

                img_wrapper.append(img)

                let img_subData = document.createElement("div")
                img_subData.className = "img_subData"


                img_wrapper.append(img)
                content.append(img_wrapper)

                if(messageData.content.textData) {
                    let paragraph = document.createElement("p")
                    paragraph.innerText = messageData.content.textData

                    img_subData.append(paragraph)
                }

                let messageStatus = document.createElement("span")
                messageStatus.className = "messageStatus"

                let time = document.createElement("span")
                time.className = "time"
                time.innerText = messageData.content.sentAt

                messageStatus.append(time)

                if(messageData.sentStatus === "outgoing") {
                    let checkSymbol = document.createElement("span")
                    checkSymbol.className = "material-symbols-outlined"
                    checkSymbol.innerText = "check"

                    messageStatus.append(checkSymbol)
                }


                img_subData.append(messageStatus)
                content.append(img_subData)

                img.addEventListener("load", () => {
                    lastMessageScroll("instant")

                })

            } else if(messageData.contentType === "textMessage") {
                let paragraph = document.createElement("p")
                paragraph.innerText = messageData.content.textData
        
                let messageStatus = document.createElement("span")
                messageStatus.className = "messageStatus"
        
                let time = document.createElement("span")
                time.className = "time"
                time.innerText = messageData.content.sentAt
        
                messageStatus.append(time)
        
                if(messageData.sentStatus === "outgoing") {
                    let checkSymbol = document.createElement("span")
                    checkSymbol.className = "material-symbols-outlined"
                    checkSymbol.innerText = "check"
        
                    messageStatus.append(checkSymbol)
                }
        

                content.append(paragraph)
                content.append(messageStatus)
            }

            message.append(content)
            // console.log(message)
            const wrapper_Scrollbar = document.querySelector(".wrapper_Scrollbar")
            wrapper_Scrollbar.before(message)
        }
        // console.log(counter)
        // console.log(media)
        // for(let j=0; j<media.length; j++) {
        //     if(media[j].load) {
        //         console.log(true)
        //     }
        // }
        
        if(counter === media.length) {
            lastMessageScroll("instant")
            document.querySelector(`.chatWrapper`).classList.remove("loading")
        }
        // const mediaData = document.querySelectorAll("[alt=chatImage]")
        // console.log(mediaData)
        // mediaData.forEach(data => {
        //     data.addEventListener("click", (e) => {
        //         const elemPosition = data.getBoundingClientRect()
        //         console.log(elemPosition)
        //         const innerText = data.parentNode.parentNode.lastElementChild.children[0].innerHTML
        //         const innerDate = data.parentNode.parentNode.lastElementChild.children[1].children[0].innerHTML
        //         console.log(innerText)
        //         console.log(innerDate)
        //         const modalW = getModalMediaWindow(elemPosition, e)
        //         console.log(modalW)
        //         let modal = modalW.initModalWindow(
        //             e.target.currentSrc,
        //             innerText,
        //             innerDate,
        //         )
        //         console.log(modal)
        //         modalW.modalMediaView = true
        //         document.body.append(modal)
        //         const backArrow = document.getElementById("modalBackArrow")
        //         backArrow.addEventListener("click", (e) => {
        //             const modal = e.target.parentNode.parentNode.parentNode.parentNode
        //             const img = e.target.parentNode.parentNode.parentNode.parentNode.children[1].children[0].children[0]
        //             modal.classList.add("removed")
        //             img.style.transform = `translate(${modalW.leftOffset}, ${modalW.topOffset})`
        //             modal.addEventListener("transitionend", () => {
        //                 modal.remove()
        //             })
        //         })
        //     })
        // })
    }
        // chatWrapper.style.bacground = "#fff"
        

        // images.forEach(image => {
        //     image.addEventListener("load", () => {
        //         if(image.complete) {
        //             // wrapper_Scrollbar.before(message)
        //             // const wrapper_Scrollbar = document.querySelector(".wrapper_Scrollbar")
        //         }
        //     })
        // })
        // const wrapper_Scrollbar = document.querySelector(".wrapper_Scrollbar")
        // wrapper_Scrollbar.before(message)
        // console.log(observer)
    // lastMessageScroll("instant")
    // const child = document.getElementById("chatWrapper").children
    //     console.log(child)
    //     child.forEach(message => {
    //         message.forEach(content => {
    //             content.forEach(img => {
    //                 if(img.children.contains("img")) {
    //                     if(img.children.img.complete) {
    //                         console.log('фотка готова')
    //                     }
    //                 }
    //             })
    //         })
    //     })
    //     for(const message of child.children){
    //         for(const content of message.children) {
    //             for (const data of content.childre) {
    //                 if( data.contains("div.img") ) {
    //                     for ( const img of data.children ) {
    //                         if ( img.tagName === "IMG" ) {
    //                             console.log('ты добрался до картинки')
    //                         }}}}}}

    document.addEventListener("DOMContentLoaded", () => {
        // const images = document.querySelectorAll("[alt=chatImage]")
        // console.log(images)
        console.log('content loaded')
        // const wrapper_Scrollbar = document.querySelector(".wrapper_Scrollbar")
        // wrapper_Scrollbar.before(message)
        lastMessageScroll("instant")
    });
    // const wrapper_Scrollbar = document.querySelector(".wrapper_Scrollbar")
    // lastMessageScroll("instant")

    // let message = document.createElement("div")
    // message.classList.add("message", "outgoing")
}


const messageInput = document.querySelector(".messageInput input[type=text]")
const rightSide = document.querySelector('.rightSide')
const addBackArrow = document.querySelector(".imgText")



function addImageProcess(src) {
    return new Promise((resolve, reject) => {
      let img = new Image()
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
}


const chatBox = document.querySelector(".chatBox")



window.onload = () => {
    const chatId = document.querySelectorAll("[name=hasID]")
    // console.log('ghbdtn')

    chatId.forEach(chat => {
        chat.addEventListener("click", (e) => {

    
            const chatProfileId = chat.id
            const oppenedChat = document.querySelector(`.chatWrapper`)
            const chatHeader = document.querySelector(".rightSide .header")
            const messageInputSection = document.querySelector(".rightSide .messageInput")

            rightSideSection.classList.remove("rightSideOnLoad")

            chatBox.classList.add("active")
            chatHeader.classList.add("active")
            messageInputSection.classList.add("active")

            
    
            if(document.body.clientWidth <= 425) {
                rightSide.classList.toggle("active")
    
                // if(document.querySelector(".imgText + span.material-symbols-outlined")) {
                //     document.querySelector(".imgText + span.material-symbols-outlined").remove()
                // }
                let backArrowDiv = document.createElement("div")
                backArrowDiv.className = "backArrow"

                let backArrow = document.createElement("span")
                backArrow.className = "material-symbols-outlined"
                backArrow.innerText = "arrow_back"
                
                backArrowDiv.append(backArrow)
                addBackArrow.prepend(backArrowDiv)
    
                backArrowDiv.addEventListener("click", (e) => {
                    rightSide.classList.toggle("active")
                    backArrowDiv.remove()
                })
            }
    
    
            if(oppenedChat.getAttribute("name") !== chat.id) {
                const activeChatProfile = document.querySelector(".chatList .block.active")
                activeChatProfile?.classList.remove("active")
                messageInput.value = ''
            }
            // console.log(this)
            // console.log(oppenedChat.getAttribute("name"))
            if(!chat.classList.contains("active") && document.body.clientWidth > 425) {
                chat.classList.add("active")
            }
            if(oppenedChat.getAttribute("name") === chat.id) {
                lastMessageScroll("smooth")
            } else {
                // oppenedChat.classList.add("loading")
                const removeNodes = document.querySelectorAll('.chatWrapper > div.message')
                removeNodes.forEach(node => {
                    node.remove()
                })
                oppenedChat.setAttribute("name", `${chatProfileId}`)
                const data = localStorage.getItem(chatProfileId)
                // console.log(data)
                
                const localStorageData = JSON.parse(data)
                // console.log(localStorageData)
                showChatMessages(localStorageData)

                const imgProfile = chat.querySelector(".imgbx img")
                const nameProfile = chat.querySelector(".listHead h4")
                getChatHeader(imgProfile, nameProfile, chatHeader)
    
            }
            // oppenedChat.scrollTop = oppenedChat.scrollHeight;
    
            // for (let i=0; i<localStorageData.length; i++) {
            //     console.log(JSON.parse(localStorageData))
            // }
        })
    })
}



function addNewMessage(text, sentAt, cC, cB) {
    let message = document.createElement("div")
    message.classList.add("message", "outgoing")
    // if(cC.scrollHeight <= cB.clientHeight) {
    //     message.classList.add("last")
    // }

    let content = document.createElement("div")
    content.className = "content"

    let paragragp = document.createElement("p")
    paragragp.innerText = text

    let messageStatus = document.createElement("span")
    messageStatus.className = "messageStatus"

    let time = document.createElement("span")
    time.className = "time"
    time.innerText = sentAt

    let doneSymbol = document.createElement("span")
    doneSymbol.className = "material-symbols-outlined"
    doneSymbol.innerText = "done"


    messageStatus.append(time)
    messageStatus.append(doneSymbol)
    content.append(paragragp)
    content.append(messageStatus)
    message.append(content)

    return message
}


function addNewMediaMessage(mediaSrc, textField = '', sentAt) {
    let message = document.createElement("div")
    message.classList.add("message", "outgoing")

    let content = document.createElement("div")
    content.className = "content"

    let img

    if(mediaSrc) {
        let imgWrapper = document.createElement("div")
        imgWrapper.className = "img"

        img = document.createElement("img")
        img.src = mediaSrc

        imgWrapper.append(img)
        content.append(imgWrapper)
    }

    let imgSubData = document.createElement("div")
    imgSubData.className = "img_subData"

    if(textField) {
        let paragragp = document.createElement("p")
        paragragp.innerText = textField

        imgSubData.append(paragragp)
    }

    let messageStatus = document.createElement("span")
    messageStatus.className = "messageStatus"

    let time = document.createElement("span")
    time.className = "time"
    time.innerText = sentAt

    let doneSymbol = document.createElement("span")
    doneSymbol.className = "material-symbols-outlined"
    doneSymbol.innerText = "done"

    messageStatus.append(time)
    messageStatus.append(doneSymbol)
    imgSubData.append(messageStatus)
    content.append(imgSubData)

    message.append(content)

    img.addEventListener("click", (e) => {
        const elemPosition = img.getBoundingClientRect()
        // console.log(elemPosition)
        console.log(img.parentNode.parentNode)
        console.log(img.parentNode.parentNode.lastElementChild)
        console.log(img.parentNode.parentNode.lastElementChild.children)
        const innerText = textField === '' ? null : img.parentNode.parentNode.lastElementChild.children[0].innerHTML
        const innerDate = textField === '' ? img.parentNode.parentNode.lastElementChild.children[0].children[0].innerHTML : img.parentNode.parentNode.lastElementChild.children[1].children[0].innerHTML
        console.log(innerText)
        console.log(innerDate)
        const userName = document.querySelector(".rightSide .header .imgText .userData h4")
        console.log(userName.innerText)
        // console.log(innerText)
        // console.log(innerDate)
        const modalW = getModalMediaWindow(elemPosition)
        console.log(modalW)
        let modal = modalW.initModalWindow(
            e.target.currentSrc,
            innerText,
            innerDate,
            userName.innerText,
        )
        console.log(modal)
        modalW.modalMediaView = true
        document.body.append(modal)
    })

    return message
}




function updateChatProfileData(nameId, sentAt, message, imgSrc = '') {
    const block = document.getElementById(`${nameId}`)
    let time = block.querySelector(".details .listHead .time")
    let messageText = block.querySelector(".details .messageP p")
    if(!imgSrc && block.querySelector(".details .messageP").contains(block.querySelector(".details .messageP .thumbMediaPreview"))) {
        block.querySelector(".details .messageP .thumbMediaPreview").remove()
    }
    time.innerText = sentAt
    messageText.innerText = message
    if(imgSrc) {
        if(block.querySelector(".details .messageP").contains(block.querySelector(".details .messageP .thumbMediaPreview"))) {
            block.querySelector(".details .messageP .thumbMediaPreview").remove()
        }
        let thumbMediaPreview = document.createElement("div")
        thumbMediaPreview.className = "thumbMediaPreview"

        let imgPreview = document.createElement("img")
        imgPreview.src = imgSrc

        thumbMediaPreview.append(imgPreview)
        block.querySelector(".details .messageP").prepend(thumbMediaPreview)
    }
}



messageInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13 && document.body.clientWidth > 425 && messageInput.value !== '') {

        const currentChat = document.getElementById("chatWrapper")
        const chatBox = document.getElementById("chatBox")
        // const conversation = document.getElementById("conversation").scrollHeight
        const currentChatId = currentChat.getAttribute("name")

        if(currentChat.classList.contains("nullMessages")) {
            currentChat.classList.remove("nullMessages")
        }
        // console.log(messageInput.value)
        const nowDate = new Date();
        const hours = nowDate.getHours() < 10 ? "0" + +nowDate.getHours() : +nowDate.getHours()
        const minutes = nowDate.getMinutes() < 10 ? "0" + +nowDate.getMinutes() : +nowDate.getMinutes()
        
        const hoursAndMinutes = hours + ":" + minutes // nowDate.getHours() + ':' + nowDate.getMinutes();
        const message = addNewMessage(messageInput.value, hoursAndMinutes)
        const obj = {
            sentStatus: "outgoing",
            contentType: "textMessage",
            content: {
                imgSrc: "",
                textData: messageInput.value,
                sentAt: hoursAndMinutes
            }
        }

        updateChatProfileData(currentChatId, hoursAndMinutes, messageInput.value)


        const data = localStorage.getItem(currentChatId)
        if(!data) {
            localStorage.setItem(currentChatId, JSON.stringify([obj]))
        } else {

            const localStorageData = JSON.parse(data)
            localStorageData.push(obj)
    
            localStorage.setItem(currentChatId, JSON.stringify(localStorageData))
        }

        const wrapperScrollbar = document.querySelector(".wrapper_Scrollbar")
        document.querySelector(".chatBox").classList.add("new_Message")
        wrapperScrollbar.before(message)
        const lastMessage = document.querySelector(".message.outgoing.last")
        lastMessageScroll("smooth")

        // console.log(`Conversation scroll height: ${conversation.scrollHeight}`)
        // console.log(`Conversation client height: ${conversation.clientHeight}`)
        // console.log(`ChatBox client height: ${chatBox.clientHeight}`)
        // if(conversation <= chatBox.clientHeight) {
        //     message.style.marginTop = "1.6rem"
        //     message.style.top = "0"
        // } else {
        //     console.log("da")
        //     lastMessageScroll("smooth")
        // }
        // lastMessage.className = lastMessage.className + " show"
        
        // document.querySelector(".message.outgoing.last").addEventListener('show', () => {
        //     console.log(this)
        // })
        // lastMessage.classList.add("show")
        // message.classList.add("show")
        // message.style.transform = "translateY(0rem)"
        // setTimeout(() => {
        //     lastMessage.style.top = 0;
        //     lastMessage.style.marginTop = "1rem"
        //     lastMessage.classList.remove("last")
        //     lastMessage.classList.remove("show")
        // }, 200)
        messageInput.value = '';

        // lastMessageScroll("smooth")
    }
})


const attachMedia = document.querySelector("input[type='file']")
const mainContainer = document.querySelector(".container") 

attachMedia.onchange = (event) => {
    console.log(event)

    let outerAttachMediaContainer = document.createElement("div")
    outerAttachMediaContainer.className = "outerAttachMediaContainer"
    
    let attachMediaModalContainer = document.createElement("div")
    attachMediaModalContainer.id = "attachMediaModalContainer"
    attachMediaModalContainer.classList.add("attachMediaModalContainer")
    // console.log(chatBox.clientHeight)
    // attachMediaModal.style.height = `${chatBox.clientHeight}px`
    // attachMediaModal.style.width = `${chatBox.clientWidth}px`


    let mediaModalWrapper = document.createElement("div")
    mediaModalWrapper.className = "mediaModalWrapper"

    let imgWrapper = document.createElement("div")
    imgWrapper.className = "imgWrapper"
    let img = document.createElement("img")


    let inputField = document.createElement("div")
    inputField.className = 'inputField'
    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "Добавить подпись")

    let sendButton = document.createElement("button")
    sendButton.innerText = 'Отправить'


    inputField.append(input)
    inputField.append(sendButton)

    
    let img_source

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0])
    reader.onload = () => {
        img.src = reader.result;
        img_source = reader.result;
    }
    console.log(img_source)

    imgWrapper.append(img)
    mediaModalWrapper.append(imgWrapper)
    mediaModalWrapper.append(inputField)
    attachMediaModalContainer.append(mediaModalWrapper)

    mainContainer.append(attachMediaModalContainer)
    // mainContainer.append(outerAttachMediaContainer)

    window.addEventListener("click", (e) => {
        if (!mediaModalWrapper.contains(e.target)) {
            attachMediaModalContainer.classList.add("removed")
            // mediaModalWrapper.style.transform = `translateY(60rem)`
            attachMediaModalContainer.addEventListener("transitionend", () => {
                attachMediaModalContainer.remove()
                outerAttachMediaContainer.remove()
            })
            reader.abort()
        }
    }) 

    // outerAttachMediaContainer.addEventListener("click", e => {
    //     console.log("клик по модулю")
    //     console.log(e.target)
    //     console.log()
    //     if(e.target = outerAttachMediaContainer){
    //         attachMediaModalContainer.classList.add("removed")
    //         // mediaModalWrapper.style.transform = `translateY(60rem)`
    //         attachMediaModalContainer.addEventListener("transitionend", () => {
    //             attachMediaModalContainer.remove()
    //             outerAttachMediaContainer.remove()
    //         })
    //     }
    // })

    sendButton.addEventListener("click", () => {
        attachMediaModalContainer.classList.add("removed")
        // mediaModalWrapper.style.transform = `translateY(60rem)`
        attachMediaModalContainer.addEventListener("transitionend", () => {
            attachMediaModalContainer.remove()
        })
        const currentChat = document.getElementById("chatWrapper")
        const currentChatId = currentChat.getAttribute("name")

        const nowDate = new Date();
        const hours = nowDate.getHours() < 10 ? "0" + +nowDate.getHours() : +nowDate.getHours()
        const minutes = nowDate.getMinutes() < 10 ? "0" + +nowDate.getMinutes() : +nowDate.getMinutes()
        
        const hoursAndMinutes = hours + ":" + minutes // nowDate.getHours() + ':' + nowDate.getMinutes();

        const message = addNewMediaMessage(img.src, input.value, hoursAndMinutes)

        const obj = {
            sentStatus: "outgoing",
            contentType: "mediaMessage",
            content: {
                imgSrc: reader.result,
                textData: input.value,
                sentAt: hoursAndMinutes
            }
        }

        updateChatProfileData(currentChatId, hoursAndMinutes, input.value, reader.result)

        const data = localStorage.getItem(currentChatId)
        if(!data) {
            localStorage.setItem(currentChatId, JSON.stringify([obj]))
        } else {

            const localStorageData = JSON.parse(data)
            localStorageData.push(obj)
    
            localStorage.setItem(currentChatId, JSON.stringify(localStorageData))
        }
        


        const wrapperScrollbar = document.querySelector(".wrapper_Scrollbar")
        document.querySelector(".chatBox").classList.add("new_Message")
        wrapperScrollbar.before(message)

        lastMessageScroll("smooth")
    })

}

// window.addEventListener("resize", (e) => {
//     if(document.body.clientWidth <= 425 && rightSide.classList.contains("active")) {
//         // console.log(document.body.clientWidth)
//         let backArrow = document.createElement("span")
//         backArrow.className = "material-symbols-outlined"
//         backArrow.innerText = "arrow_back"

//         addBackArrow.prepend(backArrow)
//     }
// })


const input = document.querySelector(".messageInput")
const sendArrow = input.querySelector(".sendArrow")

messageInput.oninput = (e) => {
    if(document.body.clientWidth <= 425) {
        if(messageInput.value !== '' && !input.querySelector(".sendArrow").classList.contains("active")) {
            input.querySelector(".sendArrow").classList.add("active")
            // let sendArrow = document.createElement("div")
            // sendArrow.classList.add("sendArrow", "active")
    
            // let sendArrowSymbol = document.createElement("span")
            // sendArrowSymbol.className = "material-symbols-outlined"
            // sendArrowSymbol.innerText = "send"
    
            // sendArrow.append(sendArrowSymbol)
            // input.append(sendArrow)
        }
        if(messageInput.value === '' && input.querySelector(".sendArrow").classList.contains("active")) {
            
            sendArrow.classList.remove("active")
        }
    }
}

sendArrow.onclick = (e) => {
    const currentChat = document.querySelector(".chatWrapper")
    const currentChatId = currentChat.getAttribute("name")

    if(currentChat.classList.contains("nullMessages")) {
        currentChat.classList.remove("nullMessages")
    }
    // console.log(messageInput.value)
    const nowDate = new Date();
    const hours = nowDate.getHours() < 10 ? "0" + +nowDate.getHours() : +nowDate.getHours()
    const minutes = nowDate.getMinutes() < 10 ? "0" + +nowDate.getMinutes() : +nowDate.getMinutes()
    
    const hoursAndMinutes = hours + ":" + minutes // nowDate.getHours() + ':' + nowDate.getMinutes();
    const message = addNewMessage(messageInput.value, hoursAndMinutes)
    const obj = {
        sentStatus: "outgoing",
        contentType: "textMessage",
        content: {
            imgSrc: "",
            textData: messageInput.value,
            sentAt: hoursAndMinutes
        }
    }

    updateChatProfileData(currentChatId, hoursAndMinutes, messageInput.value)


    const data = localStorage.getItem(currentChatId)
    if(!data) {
        localStorage.setItem(currentChatId, JSON.stringify([obj]))
    } else {

        const localStorageData = JSON.parse(data)
        localStorageData.push(obj)

        localStorage.setItem(currentChatId, JSON.stringify(localStorageData))
    }

    const wrapperScrollbar = document.querySelector(".wrapper_Scrollbar")
    wrapperScrollbar.before(message)
    messageInput.value = '';
    if(messageInput.value === '' && input.querySelector(".sendArrow").classList.contains("active")) {
            
        sendArrow.classList.remove("active")
    }

    lastMessageScroll("smooth")
}




