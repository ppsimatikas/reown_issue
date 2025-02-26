import './App.css'
import {useAccount, useSignMessage} from "wagmi";
import {useEffect} from "react";

function App() {
    const {address, isReconnecting, isDisconnected} = useAccount()
    // const {user} = useLogin(address)
    const {signMessageAsync} = useSignMessage()

    useEffect(() => {
        const message = `Sign this message to log in: ${address}`;
        if (address) {
            signMessageAsync({message}).then(console.log).catch(console.error);
        }
    }, [address]);


    return (
        <div>
            Hello
            <appkit-button/>
        </div>
    )
}

export default App
