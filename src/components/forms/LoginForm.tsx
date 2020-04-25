import React from 'react';
import { useForm, FieldError } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
};

interface Props {
    onSubmit?: (email: string, password: string) => void;
    onCancel?: () => void;
    loading?: boolean;
}

const LoginForm: React.FC<Props> = (props: Props) => {
    const { register, handleSubmit, errors } = useForm<FormData>();

    const onSubmit = handleSubmit(({ email, password }) => {
        console.log(email, password);
        props.onSubmit?.(email, password);
    }); // firstName and lastName will have correct type

    const getErrorMessage = (name: string, error: FieldError): string => {
        switch (error.type) {
            case 'required': {
                return `${name} is a required field.`;
            }
            case 'minLength': {
                return `${name} needs to be at least 6 characters long`;
            }
            default: {
                return 'Default error message';
            }
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input
                    autoFocus={true}
                    name="email"
                    placeholder="Email"
                    ref={register({ required: true })}
                    className={`${
                        errors.email && 'border border-red-500'
                    } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
                />
                {console.log(errors)}
                {errors.email && <span className="text-xs text-red-400">{getErrorMessage('Email', errors.email)}</span>}
            </div>

            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                ref={register({ required: true, minLength: 6 })}
                className={`${
                    errors.password && 'border border-red-500'
                } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
            />
            {errors.password && (
                <span className="text-xs text-red-400">{getErrorMessage('Password', errors.password)}</span>
            )}

            <div className="flex justify-end pt-8">
                <input
                    type="reset"
                    className="px-4 bg-transparent py-2 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2"
                    onClick={props.onCancel}
                    value="Cancel"
                />

                <input
                    disabled={props.loading}
                    type="submit"
                    className="px-4 bg-indigo-500  py-2 rounded-lg text-white hover:bg-indigo-400"
                    value={`${props.loading ? 'Loading' : 'Confirm'}`}
                />
            </div>
        </form>
    );
};

export default LoginForm;
