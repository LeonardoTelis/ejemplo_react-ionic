export function searchCustomers(){
    if(!localStorage['customers']){
        localStorage['customers'] = '[]';
    }
    let customers = localStorage['customers'];
    customers = JSON.parse(customers);
    return customers;
}

export function removeCostumer(id: string) {
    let customers = searchCustomers();

    let indice = customers.findIndex((customers:any) => customers.id == id);
    customers.splice(indice, 1);
    localStorage['customers'] = JSON.stringify(customers);
}

export function saveCustomer(customer:any) {
        let customers = searchCustomers();
    customers.push(customer)
    localStorage['customers'] = JSON.stringify(customers);
}

export function searchCustomersById(id:string) {
    let customers = searchCustomers();
return customers.find((customer: any) => customer.id == id);
}