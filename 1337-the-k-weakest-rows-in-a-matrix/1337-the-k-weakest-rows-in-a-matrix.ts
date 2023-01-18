function kWeakestRows(mat: number[][], k: number): number[] {
    const res: number[] | any = []
    let partialRes: number[] | any = []
    let counter: number = 0

    for (let i: number = 0; i < mat.length; i++) {
        counter = 0
        for (let j: number = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) counter++
        }
        partialRes = [i, counter]
        res.push(partialRes)
    }

    res.sort((a: number[], b: number[]) => {
        if (a[1] > b[1]) {
            return 1
        }
        if (a[1] < b[1]) {
            return -1
        }
        return 0
    })

    return res.slice(0, k).map((element: number[]) => element[0])
};