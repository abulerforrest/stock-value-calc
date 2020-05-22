import {
    useState,
    useEffect
} from 'react';

export const useAlgorithm = (vInitial, vToday, diffTotal, diffLast, currency) => {

    const [algorithm, setAlgorithm] = useState('');

    useEffect(() => {
        if(vToday && vInitial) {
            setAlgorithm(`${vToday}${currency} (${vInitial}${currency}) ${diffTotal} (${diffLast})`);
        }
        else {
            setAlgorithm('');
        }
    }, [currency, diffLast, diffTotal, vInitial, vToday]);

    return algorithm;
}

export const useCalcDiff = (v1, v2) => {

    const [diff, setDiff] = useState('');

    useEffect(() => {
        if(v1 && v2) {
            const diff = v1 - v2;
            setDiff(Math.sign(diff) === -1? `${diff}`: `+${diff}`);
        }
        else {
            setDiff('');
        }
    }, [v1, v2]);

    return diff;
}