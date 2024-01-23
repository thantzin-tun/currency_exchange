import { exchange_rate, support_list_country } from "domains";
import domainUrl from "domains/url";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
    code: string;
    value: string | number;
};

type ExchangeState = {
    support: State[];
    rates: State[];
    code: string;
    rate: number;
    result: number;
    amount: string | number;
};

type ExchangeAction = {
    fetchSupportCountryList: (endPoint: string) => Promise<void>;
    fetchRateList: (endPoint: string) => Promise<void>;
    selected_currency_change: (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => void;
    calculate_currency: (amount: any) => void;
    set_amount: (amount: string | number) => void;
};

export const useApiStore = create<ExchangeState & ExchangeAction>()(
    immer<ExchangeState & ExchangeAction>((set) => ({
        support: [],
        rates: [],
        code: "",
        rate: 0,
        result: 1,
        amount: 1,
        fetchSupportCountryList: async (endPoint) => {
            try {
                const responseData = await domainUrl.get(endPoint);
                if (responseData.data && responseData.data.currencies) {
                    const support_List = Object.entries(
                        responseData.data.currencies
                    );
                    let exchange_rate_country: any = [];
                    for (const [code, name] of support_List) {
                        exchange_rate_country.push({
                            code,
                            value: name,
                        });
                    }
                    set({
                        support: exchange_rate_country,
                        code: exchange_rate_country[0].code,
                    });
                }
            } catch (error) {
                console.error("Error fetching support countries:", error);
            }
        },
        fetchRateList: async (endPoint) => {
            try {
                const responseData = await domainUrl.get(endPoint);
                if (responseData.data && responseData.data.quotes) {
                    const rate_list = Object.entries(responseData.data.quotes);
                    let exchange_rate_country: any = [];
                    for (const [code, name] of rate_list) {
                        exchange_rate_country.push({
                            code,
                            value: name,
                        });
                    }
                    set({
                        rates: exchange_rate_country,
                        rate: exchange_rate_country[0].value,
                    });
                }
            } catch (error) {
                console.error("Error fetching support countries:", error);
            }
        },
        selected_currency_change: (event) => {
            console.log("Event target is ", event.target.selectedIndex);
            const selectedIndex = event.target.selectedIndex;
            set((state) => {
                const newState = {
                    code: state.support[selectedIndex].code,
                    rate: state.rates[selectedIndex].value,
                };
                return newState;
            });
        },
        set_amount: (amount) => {
            set((state) => ({
                amount: amount === "" ? 1 : amount,
            }));
        },
        calculate_currency: (amount) => {
            set((state) => ({
                result: Number(state.amount) / state.rate,
            }));
        },
    }))
);
