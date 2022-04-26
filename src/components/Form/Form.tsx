import React from "react";
import "./form.css";
import { SubmitHandler, useForm } from "react-hook-form";


enum Gender {
    female = "female",
    male = "male",
    other = "other",
}

interface IFormInput {
    firstName: string;
    lastName: string;
    age: number;
    gender: Gender;
}
export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>({
        defaultValues: {
            firstName: "John",
            lastName: "Smith",
            age: 25,
            gender: Gender.male,
        },
    });
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>First Name</label>
            <input
                {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                        value: 3,
                        message: "First name should contain min 3 characters",
                    },
                    maxLength: {
                        value: 15,
                        message: "First name can contain max 15 characters",
                    },
                })}
                placeholder="First Name"
            />
            {errors.firstName && (
                <div className="error">{errors.firstName?.message}</div>
            )}
            <label>Last Name</label>
            <input
                {...register("lastName", { pattern: /^[A-Za-z]+$/ })}
                placeholder="Last Name"
            />
            {errors.lastName && (
                <div className="error">
                    Enter valid last name containing only characters
                </div>
            )}
            <label>Age</label>
            <input
                type="number"
                {...register("age", {
                    required: "Age is required",
                    validate: {
                        positive: (val) => val > 0 || "Age should be a positive number"
                    },
                    min: {
                        value: 18,
                        message: "Min age should be 18 years",
                    },
                    max: {
                        value: 99,
                        message: "Max age should be 99",
                    },
                })}
                placeholder="Age"
            />
            {errors.age?.message ? (
                <div className="error">{errors.age?.message}</div>
            ) : (
                <></>
            )}
            <label>Choose a Gender</label>
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="submit" />
        </form>
    );
}
