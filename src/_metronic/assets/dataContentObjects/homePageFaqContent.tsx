interface homePageFaqContentDataItem {
    label: string;
    content: string
}

export const homePageFaqContentData: homePageFaqContentDataItem[]  = [
    {
        label: 'Is there a sign up deadline?',
        content: 'The order deadline to receive meals overnight Sunday is Wednesday at 12 PM of the week prior.'
    },
    {
        label: 'Could one account on be shared by two or more people?',
        content: 'Our plans were designed with the individual member in mind. As such, each member must sign up online in order to create their own account to be able to manage their meal preferences and exclusions.'
    },
    {
        label: 'Can I pause my membership?',
        content: 'Your MacroPlate membership can either be paused until further notice or for specific delivery dates by emailing us at support@macro-plate.com. We kindly ask for all requests for the following week to be submitted by Wednesday at 12 PM. Due to the extensive planning and preparation required by our service, we are unable to accommodate any pause requests or refunds after this deadline.'
    },
    {
        label: 'How does ordering work?',
        content: 'MacroPlate is a subscription-based service and our members are billed each Wednesday for the following week. Deliveries will continue until you choose to pause.'
    },
    {
        label: 'Does MacroPlate have a referral program?',
        content: 'Yes we do! Upon signing up, you will receive an automated email which will include your referral code. This code will also be included in an envelope with your first delivery. Feel free to share this code with your friends and family. Each time your unique code is used during checkout, $10 will be deducted from the first week of service and a $10 credit will be applied to your MacroPlate account.'
    }
]
