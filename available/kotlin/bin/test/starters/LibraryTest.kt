package starters;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Assertions.assertEquals;

class LibraryTest {

    @Test
    internal fun testSomeLibraryMethod() {
        val classUnderTest = Library();
        assertEquals(true, classUnderTest.someLibraryMethod());
    }
}
