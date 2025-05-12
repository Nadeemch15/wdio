describe('Ecommerce Application', async()=>
{
    xit('Login Page', async ()=>
    {     
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await browser.getTitle());       
       await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"));
       await $("//input[@id='username']").setValue("rahulshettyacademy");
       await $("//input[@name='password']").setValue("learning");
       await $("//input[@id='signInBtn']").click();    
    })

    it('Failed Login Page', async ()=>
        {           
           await browser.url("rahulshettyacademy.com/loginpagePractise/");
           console.log(await browser.getTitle());       
           await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"));
           await $("//input[@id='username']").setValue("rahulshettyacademy");
           await $("//input[@name='password']").setValue("learning123");
           await $("#signInBtn").click();

           await console.log(await $(".alert-danger").getText());
           //await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value')==='Sign In',
            $("#signInBtn").waitUntil(async ()=> {
             return (await this.getAttribute('value') === 'Sign In'
           )},
           {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
        await console.log(await $(".alert-danger").getText());
        //await expect($("p").toHaveText(expect.stringContaining('user name is')));
        //await expect($("p").toHaveText(expect.stringContaining('user name is rahulshettry'))
    }) 
    
})