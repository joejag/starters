fn main() {
    println!("{}", something());
}

fn something() -> i32 {
    1
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn itworks() {
        assert_eq!(1, something());
    }
}
