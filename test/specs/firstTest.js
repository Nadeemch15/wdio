describe('Ecommerce Application', async()=>
{
    it('Login Page', async ()=>
    {
       
       await browser.url("https://rahulshettyacademy.com/locatorspractice/");
       console.log(await browser.getTitle());
    })
})