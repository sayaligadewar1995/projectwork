export class Menu {

    public static menu: Array<any> = [
        {
            oe: [
                { path: 'oedash', title: 'Dashboard', class: '' },
                {
                    path: 'loangenerationdash', title: 'Loangeneration', class: '',
                    submenu: [
                        { path: 'customerdetailsdash', title: 'CustomerDetails', icon: 'dashboard', class: ''},
                        { path: 'customerdatasdash', title: 'CustomerData', icon: 'dashboard', class: ''}

                    ]
                },

            ],
            re: [
                { path: 'redash', title: 'Dashboard', icon: 'dashboard', class: '' },
                { path: 'reloanprocess', title: 'RELoanProcess', icon: 'dashboard', class: '' },

            ]
        }

    ]
}