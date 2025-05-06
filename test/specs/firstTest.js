describe('Ecommerce Application', async()=>
{
    xit('Login Page', async ()=>
    {     
       await browser.url("https://rahulshettyacademy.com/locatorspractice/");
       console.log(await browser.getTitle());       
       await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"));
       await $("//input[@id='inputUsername']").setValue("rahulshettyacademy");
       await $("//input[@name='inputPassword']").setValue("learning");
       await $("//button[@type='submit']").click();    
    })

    it('Failed Login Page', async ()=>
        {           
           await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
           console.log(await browser.getTitle());       
           await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"));
           await $("//input[@id='username']").setValue("rahulshettyacademy");
           await $("//input[@name='password']").setValue("learning123");
           await $("#signInBtn").click();
           console.log(await $(".alert-danger").getText());
           await browser.waitUntil(async()=> $("#signInBtn").getAttribute('value') === 'Sign In',
           {
            timeout: 5000,
            timeoutMsg: 'Error message is not showing up'
        })
        //await expect($("p").toHaveText(expect.stringContaining('user name is')));
        //await expect($("p").toHaveText(expect.stringContaining('user name is rahulshettry'))
    })  
})