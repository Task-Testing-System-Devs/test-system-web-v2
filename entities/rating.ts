interface UserRating {
    id: number;
    userShortInfo: {
        email: string;
        role: string;
        firstName: string;
        lastName: string;
        middleName: string;
        departmentName: string;
        groupName: string;
    };
}