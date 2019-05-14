package com.teamconnect.connect;

import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DataSourceConnectTest {
	
	@Autowired
    private DataSource ds;
    private static final Logger logger = LoggerFactory.getLogger(DataSource.class);

    @Test
    public void testConnection() throws Exception {
        logger.info("ds : " + ds);
        Connection con = ds.getConnection();
        logger.info("con : " + con);
        con.close();
    }

}
