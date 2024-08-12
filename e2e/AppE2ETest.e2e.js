describe('App Functionalities', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should display the home screen with the correct UI elements', async () => {
        await expect(element(by.id('app-title'))).toBeVisible();
        await expect(element(by.id('question-input'))).toBeVisible();
        await expect(element(by.id('submit-button'))).toBeVisible();
      });

      it('should show loading toast when submitting a question', async () => {
        await element(by.id('question-input')).typeText('What is the meaning of life?');
        await element(by.id('submit-button')).tap();
    
        // Check for loading toast
        await expect(element(by.text('Please Wait...'))).toBeVisible();
      });

      it('should display a success toast after successful submission', async () => {
        // Wait for success toast to appear
        await waitFor(element(by.text('Success!')))
          .toBeVisible()
          .withTimeout(5000);
    
        // Check if the response is displayed
        await expect(element(by.id('response-text'))).toBeVisible();
      });

      it('should display an error toast if submission fails', async () => {
        // Simulate an error by using an invalid API key
        await device.launchApp({ newInstance: true }); // Relaunch to reset state
        await element(by.id('question-input')).typeText('Will this fail?');
        await element(by.id('submit-button')).tap();
    
        // Wait for error toast to appear
        await waitFor(element(by.text('Error')))
          .toBeVisible()
          .withTimeout(5000);
    
        // Optionally check for specific error message
        await expect(element(by.text('Failed to submit your question.'))).toBeVisible();
      });

   
})