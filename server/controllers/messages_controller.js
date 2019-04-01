messages = []
let id = 0

module.exports = {
    readMessage: (req,res) => res.status(200).send(messages),
    
    createMessage: (req,res) => {
        const { text, time } = req.body
        const daMessage = {
            id,
            text, 
            time
        }
        messages.push(daMessage)
        id++
        res.status(200).send(messages)
    },

    updateMessage: (req,res) => {
        const { id } = req.param
        const { text, time} = req.body
        let index = null
        
        messages.forEach((item, i) =>{
            if(message.id === id * 1){
                index= i
            }
        })
        messages[index] = {
            id: messages[index].id,
            text: text || messages[index].title,
            time: time || time[index].time
        }
    },

    deleteMessage: (req,res) =>{
        // const { id } = req. params
        // let index = null
        
        // messages.forEach((item, i) =>{
        //     if(messages.id === id * 1){
        //         index= i
        //     }
        // })
        // messages.splice(index, 1)
        // res.status(200).send(messages)

        //what i had before

        const deleteID = req.params.id;
        messageIndex = messages.findIndex(message => message.id == deleteID);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);

    }







}