// Proxy is a structural design pattern that provides an object that acts as a substitute for a real service object used by a client. A proxy receives client requests, does some work (access control, caching, etc.) and then passes the request to a service object.


// Use Cases for the Proxy Pattern:
// Access Control: Controlling access to a resource based on certain conditions (as demonstrated in the example).
// Lazy Initialization: Creating an object only when it's actually needed.
// Caching: Storing the results of expensive operations to avoid repeating them.
// Logging: Logging method calls or other events.
// Remote Proxy: Representing a remote object.



//Define the common interface of real and proxy
interface subject {
    request():void;
}



class realSubject implements subject{
    request(): void {
        console.log('Real Subject: Handling request')
    }
}


class proxy implements subject{
    private realSubject:realSubject | null = null;

    constructor(private checkAccess: ()=> boolean) {

    }

    public request(): void {
        console.log("Proxy: request() method called."); // Added this line
        if(this.checkAccess()){
      // Lazy initialization: Create RealSubject only when needed.
            if(this.realSubject === null){
                console.log('lazy entered')
                this.realSubject = new realSubject
            }
            this.realSubject.request();
        }else{
            console.log('Proxy access denied')
        }
    }
}




// Example usage:

// Access control function (simulates authentication/authorization)
const checkUserAccess = (): boolean => {
    // In a real application, this would check user roles/permissions.
    const userHasAccess = Math.random() < 0.5; // Simulate random access
    console.log(`Checking user access: ${userHasAccess ? "Granted" : "Denied"}`);
    return userHasAccess;
  };
  
  const proxys = new proxy(checkUserAccess);
  
  // Make several requests through the proxy
//   proxys.request();
//   proxys.request();
//   proxys.request();
//   proxys.request();







