import React from 'react';
import '../css/components/footer.css';
import Grid from '@material-ui/core/Grid';

export default () => {
    return (
        <div>
            <div className="footer">
                <Grid container spacing={3}>                    
                    <Grid item xs={12} sm={4}>
                        <div className="paper">
                            <h4 className="head"> General </h4>
                            <hr/>
                            <a > Made by GUM&K, 2020 </a>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="paper">
                            <h4 className="head"> Social</h4>
                            <hr/>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <a className="soc" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=j9V78UbdzWI"> Facebook </a>
                                <a className="soc" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=j9V78UbdzWI"> Instagram </a>
                                <a className="soc" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=j9V78UbdzWI"> LinkedIn </a>
                                <a className="soc" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=j9V78UbdzWI"> Reddit </a>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <div className="paper">
                            <h4 className="head"> Emotional support </h4>
                            <hr />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}