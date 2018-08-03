export class InMemoryDataService {
  createDb() {
    const sentences = [
        {
            id: 3,
            text: 'Information You Give Us: We receive and store any information you enter on our Web site or give us in any other way.',
            probs: [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
        },
        {
            id: 4,
            text: 'Mobile: When you download or use apps created by Amazon or our subsidiaries, we may receive information about your'
                    + 'location and your mobile device, including a unique identifier for your device.',
            probs: [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
        },
        {
            id: 5,
            text: 'Cookies are unique identifiers that we transfer to your device to enable our systems to recognize your device and to'
                    + 'provide features such as 1-Click purchasing, Recommended for You , personalized advertisements on other Web sites'
                    + '(e.g., Amazon Associates with content served by Amazon.com and Web sites using Checkout by Amazon payment service),'
                    + 'and storage of items in your Shopping Cart between visits.',
            probs: [ 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ]
        }
    ];
    return {sentences};
  }
}
