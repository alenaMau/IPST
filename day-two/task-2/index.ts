interface SourceData {
    user_id: string,
    full_name: string,
    contact: {
        phone: string,
        email: string,
    },
    address: {
        city: string,
        zip: string,
    },
    is_active: boolean,
}

interface TargetData {
    id: string,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: string,
}

const dataConversion = (value: SourceData): TargetData => {
    return {
        id: value.user_id,
        name: value.full_name,
        phone: value.contact.phone,
        email: value.contact.email,
        location: [value.address.city, value.address.zip].join(','),
        status: value.is_active ? "active" : "offline",
    }
}

const value: SourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com(<mailto:john.doe@example.com>)",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

const target: TargetData = dataConversion(value);
console.log(target);





