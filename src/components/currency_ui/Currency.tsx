import React, { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { exchange_rate, get_method, support_list_country } from "domains";
import { useApiStore } from "store";

type CustomProps = {
    code: string;
    country_name: string;
    rate: number;
};

type ExchangeProps = {
    code: string;
    rate: number;
};

export const Currency = () => {
    const {
        support,
        fetchSupportCountryList,
        rates,
        fetchRateList,
        rate,
        code,
        selected_currency_change,
        calculate_currency,
        result,
        amount,
        set_amount,
    } = useApiStore();

    useEffect(() => {
        fetchSupportCountryList(support_list_country);
        fetchRateList(exchange_rate);

        console.log("Support is ", support);
    }, []);

    const exchange_amount = (e: any) => {
        // if (e.includes(".")) {
        //   set_amount(parseFloat(e)); // Parse as float if it contains a decimal point
        // } else {
        //   set_amount(parseInt(e)); // Parse as integer if it doesn't contain a decimal point
        // }
        set_amount(e);
        calculate_currency(amount);
    };

    useEffect(() => {
        calculate_currency(amount);
    }, [code, amount]);

    return (
        <>
            <div className="card  w-6/12 lg:w-4/6 md:w-10/12  card-side bg-base-100 flex flex-col shadow-xl p-4 absolute top-32 md:top-20">
                <button className="btn btn-primary w-fit text-2xl lg:text-xl md:text-lg sm:text-sm text-gray-50 my-3">
                    Currency Exchange
                </button>

                <div className="flex lg:flex-col justify-between items-center gap-3">
                    <div className="form-control w-full">
                        <label className="text-gray-50 my-2">From:</label>
                        <select
                            className="select select-bordered select-primary text-slate-100"
                            onChange={(event) =>
                                selected_currency_change(event)
                            }
                        >
                            {support.map(
                                (
                                    {
                                        code,
                                        value,
                                    }: { code: string; value: string | number },
                                    index: number
                                ) => (
                                    <option
                                        value={rates[index]?.value}
                                        key={index}
                                    >
                                        {value}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    <div className="form-control my-5 w-full">
                        <label className="text-gray-50 my-2">to: USD</label>
                        <select
                            className="select select-bordered select-primary text-slate-100"
                            defaultValue="country"
                            disabled
                        >
                            <option>United States Dollar</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="text-gray-50">Amount:</label>
                    <input
                        type="number"
                        placeholder="Type your select currency amount"
                        className="input input-bordered input-primary w-full  mt-2 text-slate-100"
                        onChange={(e) => {
                            const newValue = e.target.value;
                            const amount = newValue === "" ? 1 : newValue;
                            exchange_amount(amount);
                        }}
                    />
                </div>

                {/* Exchange Result */}
                <div className="card bg-neutral text-neutral-content w-full mt-8 px-10 py-5">
                    <div className="flex items-center justify-center md:flex-col md:items-start md:justify-start">
                        <div className="stat">
                            <div className="stat-title text-slate-100">
                                {code}
                            </div>
                            <div className="stat-value text-slate-100 lg:text-3xl">
                                {amount == 1 ? rate.toFixed(2) : amount}
                            </div>
                            <div className="stat-value text-slate-100"></div>
                        </div>
                        <span className="text-4xl"> = </span>
                        <div className="stat">
                            <div className="stat-title text-slate-100">USD</div>
                            <div className="stat-value text-slate-100 lg:text-3xl">
                                {amount == 1 ? 1.0 : result.toFixed(3)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
