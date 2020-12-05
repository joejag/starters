<?php

declare(strict_types=1);

namespace Starters\Library\Test;

use Starters\Library\Library;
use PHPUnit\Framework\TestCase;

/**
 * @covers \Starters\Library
 */
class LibraryTest extends TestCase
{
    /** @var Library */
    private $subjectUnderTest;

    protected function setUp(): void
    {
        $this->subjectUnderTest = new Library();
    }

    public function testSomeLibraryMethod(): void
    {
        $this->assertTrue($this->subjectUnderTest->someLibraryMethod());
    }
}
