import './App.css'
import {useAccount, useSignMessage} from "wagmi";
import {useEffect} from "react";

function App() {
    const {address} = useAccount()
    const {signMessageAsync} = useSignMessage()
    const message = `Sign this message to log in: ${address}`;

    useEffect(() => {
        if(address) {
            signMessageAsync({message}).then(console.log).catch(alert)
        }
    }, [address])

    return (
        <div>
            Hello
            <appkit-button/>
        </div>
    )
}

export default App
