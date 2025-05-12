describe('UI Contorls Test Suits', async()=>
{
    it('UI Contorl- Radio Button', async ()=>
    {     
       await browser.url("https://rahulshettyacademy.com/loginpagePractise/");
       console.log(await browser.getTitle());       
       await expect(browser).toHaveTitle(expect.stringContaining("Rahul Shetty"));
       await $("//input[@id='username']").setValue("rahulshettyacademy");
       await $("//input[@name='password']").setValue("learning");
       const radioButtons = await $$("//span[@class='radiotextsty']")
        radioButtons[1].click();
       await $("//input[@id='signInBtn']").click();
           
    })
})