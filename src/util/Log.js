class Log {

    error = (source, err) => {
        alert(`source: ${source}, error: ${JSON.stringify(err)}`);
    }
}

export default Log = new Log();